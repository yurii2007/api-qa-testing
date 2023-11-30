import express from "express";

import middlewares from "../../middlewares/index.js";
import userHandlers from "../../controllers/user.js";

const userRouter = express.Router();

userRouter.get("/details", middlewares.auth, userHandlers.getDetails);

userRouter.post(
  "/avatar",
  middlewares.auth,
  middlewares.upload.single("avatar"),
  userHandlers.updateAvatar
);

export default userRouter;
