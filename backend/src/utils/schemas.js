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

const answersSchema = Joi.object({
  type: Joi.string().required(),
  answers: Joi.array()
    .items(
      Joi.object({
        questionId: Joi.number().required(),
        userAnswer: Joi.string(),
      })
    )
    .required()
    .length(12),
});

const schemas = {
  register: registerSchema,
  login: loginSchema,
  answers: answersSchema,
};

export default schemas;
