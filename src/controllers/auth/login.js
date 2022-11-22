const loginController = {
  get: (req, res) => {
    res.render("pages/auth/login");
  },
  post: async (req, res) => {
    res.redirect("/dashboard");
  }
};

export {
  loginController
};