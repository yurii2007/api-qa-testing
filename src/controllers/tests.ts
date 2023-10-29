import { Response, Request } from "express";

import utils from "../utils";

const getTechQuestions = async (req: Request, res: Response) => {};

const testsHandlers = {
  getTechQuestions: utils.ctrlWrapper(getTechQuestions),
};

export default testsHandlers