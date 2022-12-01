const AUTORIZATION_LEVELS = {
  ADMIN : 1,
  VENDOR: 2,
  BUYER : 3
};

const authorizeByLevel = (level, redirectUrl) => {
  return (req, res, next) => {
    if (!req.isAuthenticated()) {
      req.session.previousUrl = req.url;
      res.redirect("/login");
    }

    if (AUTORIZATION_LEVELS[level] <= AUTORIZATION_LEVELS[req.user.authorization]) {
      return next();
    }

    res.redirect(redirectUrl || `/user/profile/${req.user.username}?productPage=1&reviewPage=1`);
  };
};

const authorizeByAuthorization = (authorization, redirectUrl) => {
  return (req, res, next) => {
    if (!req.isAuthenticated()) {
      req.session.previousUrl = req.url;
      res.redirect("/login");
    }

    if (req.user.authorization === authorization) {
      return next();
    }

    res.redirect(redirectUrl || `/user/profile/${req.user.username}?productPage=1&reviewPage=1`);
  };
};

export { authorizeByLevel, authorizeByAuthorization };
