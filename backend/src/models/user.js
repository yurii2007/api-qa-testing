import { Schema, model } from "mongoose";
import handleMongooseError from "../utils/handleMongooseError.js";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    avatarURL: String,
    token: String,
    verified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
    averageResult: {
      type: Number,
      default: 0,
    },
    testsResults: {
      type: Array,
      default: [],
    },
    amountOfTests: {
      type: Number,
      default: 0,
    },
  },
  { versionKey: false }
);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

export default User;
