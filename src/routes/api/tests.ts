import express from "express";
import testsHandlers from "../../controllers/tests";

const testsRouter = express.Router();

testsRouter.get("/tech", testsHandlers.getTechQuestions);

export default testsRouter;
