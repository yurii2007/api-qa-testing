// function for handling mongoose errors

const handleMongooseError = (error, _, next) => {
  error.status = 400;
  next();
};

export default handleMongooseError;
