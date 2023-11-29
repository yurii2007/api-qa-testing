import { Schema, model } from "mongoose";

import handleMongooseError from "../utils/handleMongooseError.js";

export const testSchema = new Schema({
  question: String,
  questionId: Number,
  answers: Array,
  rightAnswer: String,
});

testSchema.post("save", handleMongooseError);

const TechTest = model("tech-question", testSchema);

export default TechTest;