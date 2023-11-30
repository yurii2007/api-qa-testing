import { v2 as cloudinary } from "cloudinary";

import User from "../models/user.js";
import utils from "../utils/index.js";

const getUserDetails = async (req, res) => {
  const { authorization = "" } = req.headers;
  const [, token] = authorization.split(" ");
  const { username, email, avatarURL, averageResult, amountOfTests } =
    await utils.getByToken(token, process.env.JWT_KEY);

  res
    .status(200)
    .send({ user: { username, email, avatarURL, averageResult, amountOfTests } });
};

const updateAvatar = async (req, res) => {
  if (!req.file) throw utils.HttpError(400, "Please upload the file");

  const { authorization = "" } = req.headers;
  const [, token] = authorization.split(" ");
  const user = await utils.getByToken(token, process.env.JWT_KEY);

  const { path: uploadAvatar } = req.file;

  const cloudinaryResponse = await cloudinary.uploader.upload(
    uploadAvatar,
    { public_id: user._id, width: 100, height: 100 },
    (error) => {
      if (error) {
        throw utils.HttpError(503, "Please try again later");
      }
    }
  );
  await User.findByIdAndUpdate(user._id, { avatarURL: cloudinaryResponse.secure_url });
  res.status(200).send({
    message: "Avatar was successfully updated",
    new_Url: cloudinaryResponse.secure_url,
  });
};

const userHandlers = {
  getDetails: utils.ctrlWrapper(getUserDetails),
  updateAvatar: utils.ctrlWrapper(updateAvatar),
};

export default userHandlers;
