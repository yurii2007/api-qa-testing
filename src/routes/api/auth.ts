import express from "express";
import authHandlers from "../../controllers/auth";

const router = express.Router();

router.post("/register", authHandlers.register);

router.post("/login", authHandlers.login);

export default router;
