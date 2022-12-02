import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { UserModel } from "../models";

const setUpPassport = () => {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      if (!username || !password) {
        return done(null, false, { message: "All fields are required." });
      }

      if (typeof username !== "string" || typeof password !== "string") {
        return done(null, false, { message: "Invalid credentials." });
      }

      try {
        const user = await UserModel.findOne({ username });

        if (!user) {
          return done(null, false, { message: "Invalid credentials." });
        }

        // const isMatch = await user.comparePassword(password);
        // if (!isMatch) {
        //   return done(null, false, { message: "Invalid credentials." });
        // }
        console.log(user);
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await UserModel.findById(id);

      done(null, user);
    } catch (err) {
      done(err);
    }
  });
};

export { setUpPassport };
