import { Response, Request } from "express";

import utils from "../utils";
import TechTest from "../models/techTest";
import TheoryTest from "../models/theoryTest";
import { BodyResult, TypedRequestBody } from "../app.types";

// handling query for 12 random tech questions

const getTechQuestions = async (_: Request, res: Response) => {
  const tests = await TechTest.aggregate([{ $sample: { size: 12 } }]);
  res.status(200).send(tests);
};

// handling query for 12 random theory questions

const getTheoryQuestions = async (_: Request, res: Response) => {
  const tests = await TheoryTest.aggregate([{ $sample: { size: 12 } }]);
  res.status(200).send(tests);
};

// handling upcoming answers to check

const getResult = async (req: TypedRequestBody<BodyResult>, res: Response) => {
  const { answers, type } = req.body;
  const result = await utils.getFinalResult(answers, type);
  res.status(200).send({ rightAnswers: result });
};

const testsHandlers = {
  getTechQuestions: utils.ctrlWrapper(getTechQuestions),
  getTheoryQuestions: utils.ctrlWrapper(getTheoryQuestions),
  getResult: utils.ctrlWrapper(getResult),
};

export default testsHandlers;
