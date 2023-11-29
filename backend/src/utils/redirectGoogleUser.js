import jwt from "jsonwebtoken";
import User from "../models/user.js";

const redirectGoogleUser = async (profile) => {
  try {
    const existingUser = await User.findOne({ email: profile.emails[0].value });
    if (existingUser) {
      const JWT_token = jwt.sign({ id: existingUser._id }, process.env.JWT_KEY || "", {
        expiresIn: "12h",
      });
      await User.findByIdAndUpdate(existingUser._id, { token: JWT_token });
      return JWT_token;
    }

    const newUser = await User.create({
      username: profile.name.givenName,
      email: profile.emails[0].value,
      avatarURL: profile.photos[0].value ?? "https://example.com/avatar.jpg",
      password: " ",
      verificationToken: " ",
      token: "",
      verified: true,
    });
    const JWT_token = jwt.sign({ id: newUser._id }, process.env.JWT_KEY || "", {
      expiresIn: "12h",
    });
    await User.findByIdAndUpdate(newUser._id, {
      token: JWT_token,
    });
    return JWT_token;
  } catch (error) {
    return error;
  }
};

export default redirectGoogleUser;
