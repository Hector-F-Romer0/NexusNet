import passport from "passport";
import * as dotenv from "dotenv";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { userModel } from "../models/user.model.js";
// var GoogleStrategy = require('passport-google-oauth20').Strategy;

dotenv.config();

const callbackURL = "http://localhost:4000/api/v1/auth/google/callback";
const emails = ["hector_fabio.romero@uao.edu.co"];

export const auth = passport.use(
	"auth-google",
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: callbackURL,
			passReqToCallback: true,
		},
		async function (request, accessToken, refreshToken, profile, done) {
			console.log(profile);
			const existsUser = await userModel.findOne({ email: profile._json.email }).exec();

			// console.log(done);
			// If exists in DB, obtain the value
			if (existsUser) {
				return done(null, existsUser);
			} else {
				// Create document in BD
				//TODO:CREATE USER IN BD
				const newUserGoogle = new userModel({
					names: profile.name.givenName,
					lastnames: profile.name.familyName || "Google",
					username: profile.displayName,
					email: profile._json.email,
					password: "IamGoogle",
					role: "6466e5f81d1fe6f36287dc43",
					phoneNumber: "3105555789",
					country: -"Colombia",
					state: "Valle del Cauca",
					city: "Cali",
					urlImg: profile._json.picture,
				});
				await newUserGoogle.save();
				// saveUserBD(newUserGoogle);

				return done(null, profile);
			}
		}
	)
);

const saveUserBD = async (user) => {
	return user;
};

passport.serializeUser(function (user, done) {
	return done(null, user);
});

passport.deserializeUser(function (user, done) {
	return done(null, user);
});
