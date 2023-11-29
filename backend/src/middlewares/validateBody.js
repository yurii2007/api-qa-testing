import HttpError from "../utils/HttpError.js";

// validating body in the request

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) next(HttpError(400, error.message.replace(/"/g, "")));
    next();
  };
  return func;
};

export default validateBody;
