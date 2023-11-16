import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";

import authRouter from "./routes/api/auth";
import testsRouter from "./routes/api/tests";

type ServerError = {
  status?: number;
  message?: string;
};

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
passport.deserializeUser((user: any, done) => {
  done(null, user);
});

// added routes to api

app.use("/api/auth", authRouter);
app.use("/api/tests", testsRouter);

// handling non existing routes

app.use((_: any, res: Response) => {
  res.status(404).json({ message: "Not Found" });
});

// handling server errors

app.use(
  (
    { status = 500, message = "Server Error" }: ServerError,
    req: Request,
    res: Response
  ) => {
    res.status(status).json(message);
  }
);

module.exports = app;
