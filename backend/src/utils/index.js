import handleMongooseError from "./handleMongooseError.js";
import HttpError from "./HttpError.js";
import ctrlWrapper from "./ctrlWrapper.js";
import schemas from "./schemas.js";
import getByToken from "./getUserbyToken.js";
import sendEmail from "./sendMail.js";
import redirectGoogleUser from "./redirectGoogleUser.js";
import getFinalResult from "./getFinalResult.js";
import updateAverage from "./updateAverage.js";

const utils = {
  handleMongooseError,
  HttpError,
  ctrlWrapper,
  schemas,
  getByToken,
  sendEmail,
  redirectGoogleUser,
  getFinalResult,
  updateAverage,
};

export default utils;
