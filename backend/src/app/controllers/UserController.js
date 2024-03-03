import * as Yup from 'yup';
import { v4 } from 'uuid';

import { User } from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
      admin: Yup.boolean()
    });

    try {
      schema.validateSync(req.body, { abortEarly: false });

      const userAlreadyExists = await User.findOne({
        where: { email: req.body.email }
      });

      if (userAlreadyExists) {
        return res.status(409).json({ error: 'duplicated_email' });
      }

      const user = await User.create({
        id: v4(),
        ...req.body
      });

      const { id, name, email, admin } = user;

      return res.status(201).json({ id, name, email, admin });
    } catch (err) {
      return res.status(400).json({ error: err?.errors || err?.message });
    }
  }
}

export default new UserController();
