import * as Yup from 'yup';

import { Product } from '../models/Product';
import { Category } from '../models/Category';
import { User } from '../models/User';

import Order from '../schemas/Order';

class OrderController {
  async store(req, res) {
    const schema = Yup.object().shape({
      products: Yup.array()
        .required()
        .of(
          Yup.object().shape({
            id: Yup.number().required(),
            quantity: Yup.number().required()
          })
        )
    });

    try {
      schema.validateSync(req.body, { abortEarly: false });

      const productIds = req.body.products.map(({ id }) => id);

      const products = await Product.findAll({
        where: { id: productIds },
        include: [{ model: Category, as: 'category', attributes: ['name'] }]
      });

      const formattedProducts = products.map(product => {
        const productIndex = req.body.products.findIndex(
          reqProduct => reqProduct.id === product.id
        );

        const formattedProduct = {
          id: product.id,
          name: product.name,
          price: product.price,
          category: product.category.name,
          url: product.url,
          quantity: req.body.products[productIndex].quantity
        };

        return formattedProduct;
      });

      const order = {
        user: {
          id: req.userId,
          name: req.userName
        },
        products: formattedProducts,
        status: 'order-placed'
      };

      const orderResponse = await Order.create(order);

      return res.status(201).json(orderResponse);
    } catch (err) {
      return res.status(400).json({ error: err.errors });
    }
  }
  async update(req, res) {
    const schema = Yup.object().shape({
      status: Yup.string().required()
    });

    try {
      const { admin: isUserAdmin } = await User.findByPk(req.userId);

      if (!isUserAdmin) {
        return res.status(401).json({ error: "User isn't admin" });
      }

      schema.validateSync(req.body, { abortEarly: false });

      const { id } = req.params;
      const { status } = req.body;

      await Order.updateOne({ _id: id }, { status });
      return res.status(200).json({ message: 'Status updated' });
    } catch (err) {
      return res.status(400).json({ error: err?.errors || err?.message });
    }
  }
  async index(req, res) {
    try {
      const orders = await Order.find();
      return res.status(200).json(orders);
    } catch (err) {
      return res.status(500).json({ error: err?.message });
    }
  }
}

export default new OrderController();
