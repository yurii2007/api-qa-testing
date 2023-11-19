import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

import User from "../models/user";
import utils from "../utils";

// checking for auth user with jwt token

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") next(utils.HttpError(401, "Unauthorized"));

  try {
    const { id } = verify(token, process.env.JWT_KEY || "") as any;
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

export default auth