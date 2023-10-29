import auth from "./auth";
import validateBody from "./validateBody";

const middlewares = {
  auth,
  validateBody,
};

export default middlewares;