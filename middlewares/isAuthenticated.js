const User = require("../models/User");

const isAuthenticated = async (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.replace("Bearer ", "");
    const user = await User.findOne({ token: token }).select("account");
    // ...({ token: token }).select("account") /*(ou ("account autreParametre troisième parametre"))*/
    // ou ({ token: token }, account) // select("-account") ==> tout sauf account
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    } else {
      const infosUser = {
        name: user.account.username,
        email: user.email,
        token: user.token,
      };
      req.user = user;
      return next();
    }
  } else {
    return res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = isAuthenticated;
