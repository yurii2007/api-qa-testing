export interface link {
  name: string;
  path: string;
}

export interface User {
  username: string;
  email: string;
  avatarURL: string;
  token: string;
}

/*
const registerSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string()
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .required(),
  password: Joi.string().required(),
});

 */

export interface LoginBody {
  email: string;
  password: string;
}
