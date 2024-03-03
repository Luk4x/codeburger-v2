import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

import { User } from '../models/User';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required()
    });

    function badRequest() {
      res.status(400).json({ error: 'wrong_email_or_password' });
    }

    try {
      const isValidInputs = await schema.isValid(req.body);

      if (!isValidInputs) {
        return badRequest();
      }

      const { email, password } = req.body;

      const user = await User.findOne({
        where: { email }
      });

      if (!user) {
        return badRequest();
      }

      const isPasswordCorrect = await user.checkPassword(password);

      if (!isPasswordCorrect) {
        return badRequest();
      }

      return res.status(200).json({
        id: user.id,
        name: user.name,
        email,
        admin: user.admin,
        token: jwt.sign({ id: user.id, name: user.name }, authConfig.secret, {
          expiresIn: authConfig.expiresIn
        })
      });
    } catch (err) {
      return res.status(500).json({ error: err?.message });
    }
  }
}

export default new SessionController();
