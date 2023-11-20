import handleMongooseError from "./handleMongooseError";
import HttpError from "./HttpError";
import ctrlWrapper from "./ctrlWrapper";
import schemas from "./schemas";
import getByToken from "./getUserbyToken";
import sendEmail from "./sendMail";

const utils = {
  handleMongooseError,
  HttpError,
  ctrlWrapper,
  schemas,
  getByToken,
  sendEmail,
};

export default utils;
