import * as Yup from 'yup';

import { Product } from '../models/Product';
import { Category } from '../models/Category';
import { User } from '../models/User';

function getProducts() {
  return Product.findAll({
    include: [
      {
        model: Category,
        as: 'category',
        attributes: ['id', 'name']
      }
    ]
  });
}

class ProductController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      price: Yup.number().required(),
      category_id: Yup.number().required(),
      offer: Yup.boolean()
    });

    try {
      const { admin: isUserAdmin } = await User.findByPk(req.userId);

      if (!isUserAdmin) {
        return res.status(401).json({ error: "User isn't admin" });
      }

      const { name, price, category_id, offer } = req.body;

      schema.validateSync(
        { name, price, category_id, offer },
        { abortEarly: false }
      );

      if (!req.file) {
        return res.status(400).json({ error: ['file is a required field'] });
      }

      const product = await Product.create({
        name,
        price,
        category_id,
        offer,
        path: req.file.filename
      });

      const updatedProducts = await getProducts();

      return res.status(201).json({ product, updatedProducts });
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }
  }
  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      price: Yup.number(),
      category_id: Yup.number(),
      offer: Yup.boolean()
    });

    try {
      const { admin: isUserAdmin } = await User.findByPk(req.userId);

      if (!isUserAdmin) {
        return res.status(401).json({ error: "User isn't admin" });
      }

      const { id } = req.params;

      const product = await Product.findByPk(id);

      if (!product) {
        return res.status(400).json({ error: "Product doesn't exists" });
      }

      const { name, price, category_id, offer } = req.body;

      schema.validateSync(
        { name, price, category_id, offer },
        { abortEarly: false }
      );

      await Product.update(
        {
          name,
          price,
          category_id,
          path: req?.file?.filename,
          offer
        },
        { where: { id } }
      );

      const updatedProducts = await getProducts();

      return res.status(200).json({ product, updatedProducts });
    } catch (err) {
      return res.status(400).json({ error: err?.errors || err?.message });
    }
  }
  async index(_, res) {
    try {
      const products = await getProducts();

      return res.status(200).json(products);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err?.message });
    }
  }
  async delete(req, res) {
    try {
      const { admin: isUserAdmin } = await User.findByPk(req.userId);

      if (!isUserAdmin) {
        return res.status(401).json({ error: "User isn't admin" });
      }

      const { id } = req.params;

      const product = await Product.findByPk(id);

      if (!product) {
        return res.status(400).json({ error: "Product doesn't exists" });
      }

      await Product.destroy({ where: { id } });

      const updatedProducts = await getProducts();

      return res.status(200).json({ updatedProducts });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err?.message });
    }
  }
}

export default new ProductController();
