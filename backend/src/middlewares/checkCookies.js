import jwt from "jsonwebtoken";

import User from "../models/user.js";
import utils from "../utils/index.js";

// checking for auth user with jwt token

const checkCookies = async (req, res, next) => {
  const token = req.cookies["token"];

  try {
    const { id } = jwt.verify(token, process.env.JWT_KEY || "");
    const user = await User.findById(id);
    if (!user || !user.token || user.token !== token) {
      next(utils.HttpError(401, "Unauthorized"));
    }

    res.cookie("token", token, { maxAge: Date.now() + 3600000 });
    next();
  } catch (error) {
    next(utils.HttpError(401, "Unauthorized"));
  }
};

export default checkCookies;
