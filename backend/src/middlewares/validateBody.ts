import { NextFunction, Request, Response } from "express";
import HttpError from "../utils/HttpError";

// validating body in the request

const validateBody = (schema: any) => {
  const func = (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) next(HttpError(400, error.message.replace(/"/g, "")));
    next();
  };
  return func;
};

export default validateBody;