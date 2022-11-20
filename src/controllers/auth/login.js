const loginController = {
  get: (req, res) => {
    res.render("auth/login", { title: "Login" });
  },
  post: async (req, res) => {
    res.redirect("/dashboard");
  }
};

export {
  loginController
};