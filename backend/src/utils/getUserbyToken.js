import jwt from "jsonwebtoken";

import User from "../models/user.js";
import HttpError from "./HttpError.js";

const getByToken = async (token, key) => {
  const { id } = jwt.verify(token, key);
  const user = await User.findById(id);
  if (!user) throw HttpError(401, "Unauthorized");
  return user;
};

export default getByToken;
