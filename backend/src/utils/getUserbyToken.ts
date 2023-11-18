import { verify } from "jsonwebtoken";

import User from "../models/user";
import HttpError from "./HttpError";

const getByToken = async (token: string, key: string) => {
  const { id } = verify(token, key) as any;
  const user = await User.findById(id);
  if (!user) throw HttpError(401, "Unauthorized");
  return user;
};

export default getByToken