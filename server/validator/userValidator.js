import Joi from 'joi';

export const loginSchema = Joi.object({
  username: Joi.string().lowercase().trim().min(3).max(30).required(),
  password: Joi.string().min(4).max(50).required(),
});
