import { Response, Request } from "express";

import utils from "../utils";
import TechTest from "../models/techTest";
import TheoryTest from "../models/theoryTest";

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

const testsHandlers = {
  getTechQuestions: utils.ctrlWrapper(getTechQuestions),
  getTheoryQuestions: utils.ctrlWrapper(getTheoryQuestions),
};

export default testsHandlers;
