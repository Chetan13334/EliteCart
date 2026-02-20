const AppError = require("../utils/app-error");
const { verifyAccessToken } = require("../services/token.service");

const requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new AppError("Authorization token is required", 401));
  }

  const token = authHeader.slice(7);

  try {
    const payload = verifyAccessToken(token);

    if (payload.type !== "access") {
      return next(new AppError("Invalid access token", 401));
    }

    req.auth = {
      userId: payload.sub,
      role: payload.role,
    };

    return next();
  } catch (error) {
    return next(new AppError("Invalid or expired access token", 401));
  }
};

module.exports = {
  requireAuth,
};
