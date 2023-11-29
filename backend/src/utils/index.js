import handleMongooseError from "./handleMongooseError.js";
import HttpError from "./HttpError.js";
import ctrlWrapper from "./ctrlWrapper.js";
import schemas from "./schemas.js";
import getByToken from "./getUserbyToken.js";
import sendEmail from "./sendMail.js";
import redirectGoogleUser from "./redirectGoogleUser.js";
import getFinalResult from "./getFinalResult.js";

const utils = {
  handleMongooseError,
  HttpError,
  ctrlWrapper,
  schemas,
  getByToken,
  sendEmail,
  redirectGoogleUser,
  getFinalResult,
};

export default utils;
