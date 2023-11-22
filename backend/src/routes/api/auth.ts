import express from "express";
import passport from "passport";
const GoogleStrategy = require("passport-google-oauth20").Strategy;

import utils from "../../utils";
import authHandlers from "../../controllers/auth";
import middlewares from "../../middlewares";

const { GOOGLE_CLIENTID, GOOGLE_CLIENT_SECRET } = process.env;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENTID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "https://qa-testing-y6ws.onrender.com/api/auth/google/callback",
    },
    async (accessToken: any, refreshToken: any, profile: any, cb: any) => {
      //checking on existing user
      try {
        const token = await utils.redirectGoogleUser(profile);
        return cb(null, token);
      } catch (error: any) {
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
