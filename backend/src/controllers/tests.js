import utils from "../utils/index.js";
import TechTest from "../models/techTest.js";
import TheoryTest from "../models/theoryTest.js";

// handling query for 12 random tech questions

const getTechQuestions = async (_, res) => {
  const tests = await TechTest.aggregate([{ $sample: { size: 12 } }]);
  res.status(200).send(tests);
};

// handling query for 12 random theory questions

const getTheoryQuestions = async (_, res) => {
  const tests = await TheoryTest.aggregate([{ $sample: { size: 12 } }]);
  res.status(200).send(tests);
};

// handling upcoming answers to check

const getResult = async (req, res) => {
  // get token from request headers to update user data about tests
  const { authorization = "" } = req.headers;
  const [_, token] = authorization.split(" ");

  const { answers, type } = req.body;
  const result = await utils.getFinalResult(answers, type);

  const user = await utils.getByToken(token, process.env.JWT_KEY);
  await utils.updateAverage(user, result);

  res.status(200).send({ rightAnswers: result });
};

const testsHandlers = {
  getTechQuestions: utils.ctrlWrapper(getTechQuestions),
  getTheoryQuestions: utils.ctrlWrapper(getTheoryQuestions),
  getResult: utils.ctrlWrapper(getResult),
};

export default testsHandlers;
