const loginController = {
  get: (req, res) => {
    res.render("auth/login", { title: "Login" });
  }
};

export {
  loginController
};