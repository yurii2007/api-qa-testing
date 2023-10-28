import type { TypedRequestBody } from "../app.types";
import { Response } from "express";

// const jwt = require("jsonwebtoken");
import bcrypt from "bcrypt";
const { v4: uuidv4 } = require("uuid");

import User from "../models/user";
import handlers from "../utils/index";

type RegisterBody = {
  email: string;
  password: string;
  username: string;
};

const register = async (req: TypedRequestBody<RegisterBody>, res: Response) => {
  const { email, password, username } = req.body;
  const user = await User.findOne({ email });
  if (user) throw handlers.HttpError(409, "User with this email already exist");

  const hashPassword = await bcrypt.hash(password, 10);
  await User.create({
    email,
    username,
    password: hashPassword,
    avatarURL: "https://i.stack.imgur.com/l60Hf.png",
    verificationToken: uuidv4(),
  });

  res
    .status(201)
    .json({ message: "User created successfully", data: { username, email } });
};

const authHandlers = {
  register: handlers.ctrlWrapper(register),
};

export default authHandlers;