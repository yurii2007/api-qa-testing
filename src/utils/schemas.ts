import Joi from "joi";

const registerSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string()
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .required(),
  password: Joi.string().required(),
});

const loginSchema = Joi.object({
  email: Joi.string()
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .required(),
  password: Joi.string().required(),
});

const schemas = {
  register: registerSchema,
  login: loginSchema,
};

export default schemas;