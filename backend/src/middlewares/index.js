import auth from "./auth.js";
import validateBody from "./validateBody.js";
import checkCookies from "./checkCookies.js";

const middlewares = {
  auth,
  validateBody,
  checkCookies
};

export default middlewares;