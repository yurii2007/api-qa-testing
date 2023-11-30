import auth from "./auth.js";
import validateBody from "./validateBody.js";
import checkCookies from "./checkCookies.js";
import upload from "./upload.cjs";

const middlewares = {
  auth,
  validateBody,
  checkCookies,
  upload,
};

export default middlewares;
