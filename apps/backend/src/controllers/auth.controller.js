const env = require("../config/env");
const asyncHandler = require("../utils/async-handler");
const AppError = require("../utils/app-error");
const authService = require("../services/auth.service");

const refreshCookieOptions = (refreshTokenExpiresAt) => ({
  httpOnly: true,
  secure: env.isProduction,
  sameSite: env.isProduction ? "none" : "lax",
  domain: env.refreshCookieDomain,
  path: "/api/v1/auth",
  expires: refreshTokenExpiresAt,
});

const clearRefreshCookieOptions = {
  httpOnly: true,
  secure: env.isProduction,
  sameSite: env.isProduction ? "none" : "lax",
  domain: env.refreshCookieDomain,
  path: "/api/v1/auth",
};

const getRefreshTokenFromRequest = (req) => req.cookies?.[env.refreshCookieName] || req.body?.refreshToken || null;

const signup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const result = await authService.signup({
    name,
    email,
    password,
    userAgent: req.get("user-agent"),
    ipAddress: req.ip,
  });

  res.cookie(env.refreshCookieName, result.refreshToken, refreshCookieOptions(result.refreshTokenExpiresAt));

  res.status(201).json({
    success: true,
    message: "Account created successfully",
    data: {
      user: result.user,
      accessToken: result.accessToken,
    },
  });
});

const signin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const result = await authService.signin({
    email,
    password,
    userAgent: req.get("user-agent"),
    ipAddress: req.ip,
  });

  res.cookie(env.refreshCookieName, result.refreshToken, refreshCookieOptions(result.refreshTokenExpiresAt));

  res.status(200).json({
    success: true,
    message: "Signed in successfully",
    data: {
      user: result.user,
      accessToken: result.accessToken,
    },
  });
});

const refresh = asyncHandler(async (req, res) => {
  const refreshToken = getRefreshTokenFromRequest(req);

  if (!refreshToken) {
    throw new AppError("Refresh token is required", 401);
  }

  const result = await authService.refreshSession({
    refreshToken,
    userAgent: req.get("user-agent"),
    ipAddress: req.ip,
  });

  res.cookie(env.refreshCookieName, result.refreshToken, refreshCookieOptions(result.refreshTokenExpiresAt));

  res.status(200).json({
    success: true,
    message: "Token refreshed successfully",
    data: {
      user: result.user,
      accessToken: result.accessToken,
    },
  });
});

const signout = asyncHandler(async (req, res) => {
  const refreshToken = getRefreshTokenFromRequest(req);

  await authService.signout({ refreshToken });

  res.clearCookie(env.refreshCookieName, clearRefreshCookieOptions);

  res.status(200).json({
    success: true,
    message: "Signed out successfully",
  });
});

const signoutAll = asyncHandler(async (req, res) => {
  await authService.signoutAll({
    userId: req.auth.userId,
  });

  res.clearCookie(env.refreshCookieName, clearRefreshCookieOptions);

  res.status(200).json({
    success: true,
    message: "Signed out from all devices",
  });
});

const me = asyncHandler(async (req, res) => {
  const user = await authService.getCurrentUser({
    userId: req.auth.userId,
  });

  res.status(200).json({
    success: true,
    data: {
      user,
    },
  });
});

module.exports = {
  signup,
  signin,
  refresh,
  signout,
  signoutAll,
  me,
};
