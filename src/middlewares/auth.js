const auth = (redirectUrl = "/login") => {
  return (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }

    req.session.previousUrl = req.url;
    res.redirect(redirectUrl);
  };
};

const notAuth = (redirectUrl = "/") => {
  return (req, res, next) => {
    if (req.isAuthenticated()) {
      return res.redirect(redirectUrl);
    }

    next();
  };
};

export { auth, notAuth };
