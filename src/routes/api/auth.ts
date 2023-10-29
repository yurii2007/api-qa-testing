import express from "express";
import authHandlers from "../../controllers/auth";
import middlewares from "../../middlewares";
import schemas from "../../utils/schemas";

const router = express.Router();

router.post("/register", middlewares.validateBody(schemas.register), authHandlers.register);

router.post("/login", middlewares.validateBody(schemas.login), authHandlers.login);

router.post("/logout", middlewares.auth, authHandlers.logout);

export default router;