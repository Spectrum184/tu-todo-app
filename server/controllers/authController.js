import { userService } from '../services';
import { errorMessage } from '~/lib';

export const authController = {
  authorize: async (credentials, req) => {
    try {
      const { username, password } = req.body;

      const user = userService.login({ username, password });

      if (!user)
        return res.status(401).json({
          message: errorMessage.NO_USER,
        });

      return user;
    } catch (error) {
      console.log(error);

      return res.status(401).json({
        message: errorMessage.NO_USER,
      });
    }
  },

  session: async ({ session }) => {
    try {
      if (session) {
        const user = await userService.getSession(session.user);
        if (user) session.user = user;
      }

      return session;
    } catch (error) {
      console.log(error);

      return res.status(401).json({
        message: errorMessage.NO_USER,
      });
    }
  },

  register: async (req, res) => {
    try {
      const { result, error } = await userService.register(req.body);

      if (error)
        return res.status(500).json({
          message: error,
        });

      return res.status(200).json({
        result,
        message: 'Đăng ký thành công',
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        message: errorMessage.INTERNAL_SERVER_ERROR,
      });
    }
  },
};
