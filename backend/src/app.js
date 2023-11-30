import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import { v2 as cloudinary } from "cloudinary";

import authRouter from "./routes/api/auth.js";
import testsRouter from "./routes/api/tests.js";
import userRouter from "./routes/api/user.js";

// initial configuration for server

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(
  session({
    secret: process.env.SESSION_SECRET ?? "dog",
    resave: true,
    saveUninitialized: true,
  })
);

// passport configuration

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

// cloudinary configuration

cloudinary.config({
  cloud_name: "dyd0f4hrp",
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// added routes to api

app.use("/api/auth", authRouter);
app.use("/api/tests", testsRouter);
app.use("/api/user", userRouter);

// handling non existing routes

app.use((_, res) => {
  res.status(404).json({ message: "Not Found" });
});

// handling server errors

app.use(({ status = 500, message = "Server Error" }, req, res, next) => {
  res.status(status).json(message);
});

export default app;
