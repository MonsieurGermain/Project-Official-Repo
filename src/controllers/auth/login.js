import bcrypt from "bcrypt";
import { UserModel } from "../../models";

const loginController = {
  get: (req, res) => {
    res.render("pages/auth/login");
  },
  post: async (req, res) => {
    try {
      const { username, password } = req.body;

      const user = await UserModel.findOne({ username });

      if (!user) throw new Error("Username or Password Invalid");
      if (!bcrypt.compareSync(password, user.password)) throw new Error("Username or Password Invalid");


    } catch (error) {
      console.log(error);

      req.flash("error", error.message);
      res.redirect("/login");
    }
  }
};

export { loginController };
