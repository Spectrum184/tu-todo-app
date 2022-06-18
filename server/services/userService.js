import { UserModel } from '../models';
import { loginSchema, registerSchema } from '../validator';
import { joiError } from '../utils';
import bcryptjs from 'bcryptjs';
import { errorMessage } from '~/lib';

export const userService = {
  login: async ({ username, password }) => {
    try {
      const value = loginSchema.validate({
        username,
        password,
      });

      const user = await UserModel.findOne({ username: value.username });

      if (!user) throw Error(errorMessage.NO_USER);

      const isMatch = await bcryptjs.compare(password, user.password);

      if (!isMatch) throw Error(errorMessage.NO_USER);

      return user;
    } catch (error) {
      return Error(error);
    }
  },

  register: async ({ username, password, email, name, ...res }) => {
    try {
      const { error, value } = registerSchema.validate({
        username,
        password,
        email,
        name,
      });

      if (error) return { error: joiError(error) };

      let user = await UserModel.findOne({
        username,
      });

      console.log(user);

      if (user) return { error: 'Tên đăng nhập đã tồn tại' };

      user = await UserModel.findOne({
        email,
      });

      if (user) return { error: 'Email đã tồn tại' };

      const newPassword = await bcryptjs.hash(password, 12);

      const newUser = new UserModel({
        username: value.username,
        password: newPassword,
        email: value.email,
        name: value.name,
        ...res,
      });

      await newUser.save();

      return { result: { ...newUser._doc, password: '' } };
    } catch (error) {
      return Error(error);
    }
  },
};
