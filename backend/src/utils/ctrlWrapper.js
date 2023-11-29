// decorator for handling errors

const ctrlWrapper = (controller) => {
  const func = async (req, res, next) => {
    try {
      await controller(req, res);
    } catch (error) {
      next(error);
    }
  };
  return func;
};

export default ctrlWrapper;
