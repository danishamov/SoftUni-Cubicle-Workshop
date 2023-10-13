const jwt = require("../lib/jwt");
const { SECRET } = require("../config/config");

exports.auth = async (req, res, next) => {
  const token = req.cookies["auth"];

  if (token) {
    //Validate token
    try {
      const decodedToken = await jwt.verify(token, SECRET);

      req.user = decodedToken;
      res.locals.user - decodedToken;
      res.locals.isAuthenticated = true;

      next();
    } catch (err) {
      res.clearCookie("auth");
      return res.redirect("/user/login");
    }
  } else {
    next();
  }
};

exports.isAuth = (req, res, nex) => {
  if (!res.user) {
    return res.redirect("/users/login");
  }
  next();
};
