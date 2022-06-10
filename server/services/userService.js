import { errorMessage } from '~/lib';
import { UserModel } from '../models';
import { userValidator } from '../validator';
import bcryptjs from 'bcryptjs';

export const userService = {
  login: async ({ username, password }) => {
    try {
      const value = await userValidator.loginSchema.validateAsync({
        username,
        password,
      });

      console.log(value);
      const user = await UserModel.findOne({ username: value.username });

      if (!user) throw Error(errorMessage.NO_USER);

      const isMatch = await bcryptjs.compare(password, user.password);

      if (!isMatch) throw Error(errorMessage.NO_USER);

      return user;
    } catch (error) {
      throw Error(error);
    }
  },
};
