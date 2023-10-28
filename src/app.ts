import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRouter from "./routes/api/auth";

type ServerError = {
  status?: number;
  message?: string;
};

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser(process.env.JWT_KEY));

app.use("/api/auth", authRouter);

app.use((_: any, res: Response) => {
  res.status(404).json({ message: "Not Found" });
});

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
