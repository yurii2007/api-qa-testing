import TechTest from "../models/techTest.js";
import TheoryTest from "../models/theoryTest.js";
import HttpError from "./HttpError.js";

const getFinalResult = async (answers, type) => {
  let questions = [];
  switch (type) {
    case "tech":
      const techQuestions = await TechTest.find();
      questions = [...techQuestions];
      break;
    case "theory":
      const theoryQuestions = await TheoryTest.find();
      questions = [...theoryQuestions];
      break;
    default:
      throw HttpError(500, "Internal Server Error");
  }
  return answers.filter((answer) => {
    const questionIdx = questions.findIndex(
      (question) => question.questionId === answer.questionId
    );
    if (questionIdx === -1) return false;
    return questions[questionIdx].rightAnswer === answer.userAnswer;
  }).length;
};

export default getFinalResult;
