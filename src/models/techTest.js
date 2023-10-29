import { Schema, model } from "mongoose";

import utils from "../utils";

export const testSchema = new Schema({
  question: String,
  questionId: Number,
  answers: Array,
  rightAnswer: String,
});

testSchema.post("save", utils.handleMongooseError);

const TechTest = model("tech-question", testSchema);

export default TechTest;