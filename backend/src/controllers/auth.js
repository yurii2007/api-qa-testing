import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";
import { v4 } from "uuid";

import User from "../models/user.js";
import handlers from "../utils/index.js";

// handling user registration

const register = async (req, res) => {
  const { email, password, username } = req.body;
  const user = await User.findOne({ email });
  if (user) throw handlers.HttpError(409, "User with this email already exist");

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    email,
    username,
    password: hashPassword,
    avatarURL: "https://i.stack.imgur.com/l60Hf.png",
    verificationToken: v4(),
    token: "",
  });

  const verifyBody = {
    to: email,
    html: `<a target="_blank" rel="noopener noreferrer" aria-label="verify" href=${process.env.VERIFY_URL}/${newUser.verificationToken}>Verify</a>`,
  };

  await handlers.sendEmail(verifyBody);

  res
    .status(201)
    .json({ message: "User created successfully", data: { username, email } });
};

// handling user login

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw handlers.HttpError(401, "Email or password is wrong");
  if (!user.verified) throw handlers.HttpError(401, "Confirm your email first");

  const isPasswordsMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordsMatch) throw handlers.HttpError(401, "Email or password is wrong");

  const JWT_token = jwt.sign({ id: user._id }, process.env.JWT_KEY || "", {
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

const logout = async (req, res) => {
  const { authorization = "" } = req.headers;
  const [_, token] = authorization.split(" ");
  const { _id } = await handlers.getByToken(token, process.env.JWT_KEY || "");

  await User.findByIdAndUpdate(_id, { token: "" });
  res.clearCookie("token");
  res.status(204).json({ message: "Successfully logged out" });
};

const getCurrent = async (req, res) => {
  const { authorization = "" } = req.headers;
  const [, token] = authorization.split(" ");
  const { username, email, avatarURL } = await handlers.getByToken(
    token,
    process.env.JWT_KEY || ""
  );

  res.status(200).json({
    username,
    email,
    token,
    avatarURL,
  });
};

// handling redirect route after google auth

const googleRedirect = async (req, res) => {
  const token = req.user;
  res.status(201).redirect(`https://api-qa-testing.vercel.app/auth/login?token=${token}`);
};

// handling verifying email

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  if (!user) throw handlers.HttpError(404, "Not Found");

  await User.findByIdAndUpdate(user._id, { verificationToken: null, verified: true });

  res.status(200).json({ message: "Verification successful" });
};

const authHandlers = {
  register: handlers.ctrlWrapper(register),
  login: handlers.ctrlWrapper(login),
  logout: handlers.ctrlWrapper(logout),
  redirect: handlers.ctrlWrapper(googleRedirect),
  current: handlers.ctrlWrapper(getCurrent),
  verifyEmail: handlers.ctrlWrapper(verifyEmail),
};

export default authHandlers;
