// middleware/roleMiddleware.js
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Not authorized" });
    }
    next();
  };
};

// NOTICE THE BRACES { }
module.exports = { authorize };