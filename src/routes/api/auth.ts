import express from "express";
import authHandlers from "../../controllers/auth";

const router = express.Router();

router.post("/register", authHandlers.register);

export default router;
