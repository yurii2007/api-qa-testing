import express from "express";
import authHandlers from "../../controllers/auth";
import middlewares from "../../middlewares";

const router = express.Router();

router.post("/register", authHandlers.register);

router.post("/login", authHandlers.login);

router.post("/logout", middlewares.auth, authHandlers.logout);

export default router;
