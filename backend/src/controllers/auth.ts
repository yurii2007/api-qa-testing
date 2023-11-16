import type { TypedRequestBody } from "../app.types";
import { Response, Request } from "express";
import { sign, verify } from "jsonwebtoken";

import bcrypt from "bcrypt";
const { v4: uuidv4 } = require("uuid");

import User from "../models/user";
import handlers from "../utils/index";

type RegisterBody = {
  email: string;
  password: string;
  username: string;
};

// handling user registration

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

// handling user login

const login = async (
  req: TypedRequestBody<Pick<RegisterBody, "email" | "password">>,
  res: Response
) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw handlers.HttpError(401, "Email or password is wrong");
  // if (!user.verified) throw handlers.HttpError(401, "Confirm your email first");

  const isPasswordsMatch = await bcrypt.compare(user.password, password);
  if (!isPasswordsMatch) throw handlers.HttpError(401, "Email or password is wrong");

  const JWT_token = sign({ id: user._id }, process.env.JWT_KEY || "", {
    expiresIn: "12h",
  });
  await User.findByIdAndUpdate(user._id, { token: JWT_token });

  res
    .cookie("token", JWT_token)
    .status(200)
    .json({
      message: "Successfully logged in",
      data: { username: user.username, email: user.email, avatarURL: user.avatarURL },
      token: JWT_token,
    });
};

// handling user logout

const logout = async (req: Request, res: Response) => {
  const token = req.cookies["token"];
  const { id } = verify(token, process.env.JWT_KEY || "") as any;
  const user = await User.findById(id);
  if (!user) throw handlers.HttpError(401, "Unauthorized");

  await User.findByIdAndUpdate(id, { token: "" });
  res.clearCookie("token");
  res.status(204).json({ message: "Successfully logged out" });
};

// handling redirect route after google auth

const googleRedirect = async (req: TypedRequestBody<RegisterBody>, res: Response) => {
  const userInfo = JSON.stringify(req.user);
  res.status(201).send(userInfo);
};

const authHandlers = {
  register: handlers.ctrlWrapper(register),
  login: handlers.ctrlWrapper(login),
  logout: handlers.ctrlWrapper(logout),
  redirect: handlers.ctrlWrapper(googleRedirect),
};

export default authHandlers;
