import createHttpError from "http-errors";

const HttpError = (status: number, message: string) => {
  const error = createHttpError();
  error.status = status;
  error.message = message;
  return error;
};

export default HttpError;