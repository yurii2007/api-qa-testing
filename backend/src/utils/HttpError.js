import createHttpError from "http-errors";

const HttpError = (status, message) => {
  const error = createHttpError();
  error.status = status;
  error.message = message;
  return error;
};

export default HttpError;
