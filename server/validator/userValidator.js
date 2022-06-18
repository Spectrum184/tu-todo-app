import Joi from 'joi';

export const loginSchema = Joi.object({
  username: Joi.string()
    .lowercase()
    .trim()
    .min(3)
    .max(30)
    .required()
    .label('Tên đăng nhập'),
  password: Joi.string().min(4).max(50).required().label('Mật khẩu'),
});

export const registerSchema = Joi.object({
  username: Joi.string()
    .lowercase()
    .trim()
    .min(3)
    .max(30)
    .required()
    .label('Tên đăng nhập'),
  password: Joi.string().min(4).max(50).required().label('Mật khẩu'),
  name: Joi.string().trim().min(3).max(100).required().label('Tên'),
  email: Joi.string().email().required(),
});
