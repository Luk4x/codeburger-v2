import * as Yup from 'yup';
import { Category } from '../models/Category';
import { User } from '../models/User';

class CategoryController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required()
    });

    try {
      const isValidInput = await schema.isValid(req.body);

      if (!isValidInput) {
        return res.status(400).json({ error: 'Invalid category' });
      }

      const { admin: isUserAdmin } = await User.findByPk(req.userId);

      if (!isUserAdmin) {
        return res.status(401).json({ error: "User isn't admin" });
      }

      const { name } = req.body;

      const categoryExists = await Category.findOne({
        where: { name }
      });

      if (categoryExists) {
        return res.status(400).json({ error: 'Category already exists' });
      }

      const category = await Category.create({
        name,
        path: req?.file?.filename
      });

      return res.status(201).json({ id: category.id, name });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err?.errors || err?.message });
    }
  }
  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
    });

    try {
      const { admin: isUserAdmin } = await User.findByPk(req.userId);

      if (!isUserAdmin) {
        res.status(401).json({ error: "User isn't admin" });
      }

      const { name } = req.body;
      const { id } = req.params;

      schema.validateSync({ name }, { abortEarly: false });

      const category = await Category.findByPk(id);

      if (!category) {
        return res.status(400).json({ error: "Category doesn't exists" });
      }

      await Category.update(
        {
          name,
          path: req?.file?.filename
        },
        { where: { id } }
      );

      return res.status(200).json({ message: 'Category updated' });
    } catch (err) {
      return res.status(400).json({ error: err?.errors || err?.message });
    }
  }
  async index(req, res) {
    try {
      const categories = await Category.findAll();
      return res.status(200).json(categories);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err?.errors || err?.message });
    }
  }
}

export default new CategoryController();
