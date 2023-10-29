import { Schema, model } from "mongoose";
import utils from "../utils";

const testSchema = new Schema({
  question: String,
  questionId: Number,
  answers: Array,
  rightAnswer: String,
});

testSchema.post("save", utils.handleMongooseError);

const Test = model("test", testSchema);

export default Test;