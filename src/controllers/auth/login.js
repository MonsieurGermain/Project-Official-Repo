import bcrypt from "bcrypt";
import Joi from "joi";
import { UserModel } from "../../models";

const loginController = {
  get: (req, res) => {
    res.render("pages/authPages/login");
  },
  post: async (req, res) => {

    // validating request body in controller gives you more readability
    const schema = Joi.object({
      username: Joi.string().min(2).max(10).required().error(new Error("Username must be between 2 and 10 characters")),
      password: Joi.string().min(6).max(20).required().error(new Error("Password must be between 6 and 20 characters"))
    });

    await schema.validateAsync(req.body);

    try {
      const { username, password } = req.body;

      const user = await UserModel.findOne({ username });

      if (!user) throw new Error("Username or Password Invalid");
      if (!bcrypt.compareSync(password, user.password)) throw new Error("Username or Password Invalid");

      // user.settings.userExpiring ? user.updateInactiveDate() : undefined;
      await user.save();

      req.UsertoAuth = user;
    
    } catch (error) {
      console.log(error);

      req.flash("error", error.message);
      res.redirect("/login");
    }
  }
};

export { loginController };
