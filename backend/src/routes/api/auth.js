import express from "express";
import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";

import utils from "../../utils/index.js";
import authHandlers from "../../controllers/auth.js";
import middlewares from "../../middlewares/index.js";

const { GOOGLE_CLIENTID, GOOGLE_CLIENT_SECRET } = process.env;

passport.use(
  new GoogleStrategy.Strategy(
    {
      clientID: GOOGLE_CLIENTID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "https://qa-testing-y6ws.onrender.com/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, cb) => {
      //checking on existing user
      try {
        const token = await utils.redirectGoogleUser(profile);
        return cb(null, token);
      } catch (error) {
        return cb(null, error.message);
      }
    }
  )
);

const router = express.Router();

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get("/redirect", authHandlers.redirect);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    scope: ["email", "profile"],
    successRedirect: "/api/auth/redirect",
    failureRedirect: "/api/auth/login",
  }),
  (req, res) => {
    res.json(req.body);
  }
);

router.post(
  "/register",
  middlewares.validateBody(utils.schemas.register),
  authHandlers.register
);

router.post("/login", middlewares.validateBody(utils.schemas.login), authHandlers.login);

router.post("/logout", middlewares.auth, authHandlers.logout);

router.get("/current", middlewares.auth, authHandlers.current);

router.get("/verify/:verificationToken", authHandlers.verifyEmail);

export default router;
