import handleMongooseError from "./handleMongooseError";
import HttpError from "./HttpError";
import ctrlWrapper from "./ctrlWrapper";
import schemas from "./schemas";
import getByToken from "./getUserbyToken";
import sendEmail from "./sendMail";
import redirectGoogleUser from "./redirectGoogleUser";
import getFinalResult from "./getFinalResult";

const utils = {
  handleMongooseError,
  HttpError,
  ctrlWrapper,
  schemas,
  getByToken,
  sendEmail,
  redirectGoogleUser,
  getFinalResult
};

export default utils;
