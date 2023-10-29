import express from "express";
import testsHandlers from "../../controllers/tests";
import middlewares from "../../middlewares";

const testsRouter = express.Router();

testsRouter.get("/tech", middlewares.auth, testsHandlers.getTechQuestions);

testsRouter.get("/theory", middlewares.auth, testsHandlers.getTheoryQuestions);

export default testsRouter;
