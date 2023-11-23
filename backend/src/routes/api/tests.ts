import express from "express";

import testsHandlers from "../../controllers/tests";
import middlewares from "../../middlewares";
import schemas from "../../utils/schemas";

const testsRouter = express.Router();

testsRouter.get("/tech", middlewares.auth, testsHandlers.getTechQuestions);

testsRouter.get("/theory", middlewares.auth, testsHandlers.getTheoryQuestions);

testsRouter.post(
  "/result",
  middlewares.validateBody(schemas.answers),
  testsHandlers.getResult
);

export default testsRouter;
