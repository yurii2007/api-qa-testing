import { NextFunction } from "express";
import { HttpError } from "http-errors";

const handleMongooseError = (error: HttpError, _: any, next: NextFunction) => {
  error.status = 400;
  next();
};

module.exports = handleMongooseError;
