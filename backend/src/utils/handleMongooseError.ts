import { NextFunction } from "express";
import { HttpError } from "http-errors";

// function for handling mongoose errors

const handleMongooseError = (error: HttpError, _: any, next: NextFunction) => {
  error.status = 400;
  next();
};

export default handleMongooseError;
