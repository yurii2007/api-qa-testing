import auth from "./auth";
import validateBody from "./validateBody";
import checkCookies from "./checkCookies";

const middlewares = {
  auth,
  validateBody,
  checkCookies
};

export default middlewares;