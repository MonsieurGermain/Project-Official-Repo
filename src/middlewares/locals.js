const locals = (req, res, next) => {

  res.locals.authuser = req.user;
  res.locals.query = req.query;

  const splitedUrl = req.url.split("?");

  res.locals.url = splitedUrl;
  res.locals.success = req.flash("success");
  res.locals.warning = req.flash("warning");
  res.locals.error = req.flash("error");

  next();
};

export { locals };
