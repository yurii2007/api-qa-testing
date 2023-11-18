import express from "express";
import passport from "passport";
import bcrypt from "bcrypt";
const GoogleStrategy = require("passport-google-oauth20").Strategy;

import User from "../../models/user";
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
      const isExist = await User.findOne({ email: profile.emails[0].value });
      if (isExist) throw utils.HttpError(409, "User with this email already exist");

      const hashPassword = await bcrypt.hash(profile.id, 10);

      await User.create({
        username: profile.name.givenName,
        email: profile.emails[0].value,
        password: hashPassword,
        avatarURL: profile.photos[0].value ?? "https://example.com/avatar.jpg",
        token: refreshToken,
        verificationToken: accessToken,
      });
      return cb(null, profile);
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

router.get("/current", middlewares.checkCookies, authHandlers.current);

export default router;
