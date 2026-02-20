const User = require("../models/user.model");
const RefreshToken = require("../models/refresh-token.model");
const AppError = require("../utils/app-error");
const {
  hashToken,
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
  getTokenExpiresAt,
} = require("./token.service");

const INVALID_AUTH_MESSAGE = "Invalid email or password";
const INVALID_REFRESH_MESSAGE = "Invalid or expired refresh token";

const serializeUser = (user) => ({
  id: user.id ? user.id.toString() : user._id.toString(),
  name: user.name,
  email: user.email,
  role: user.role,
  lastLoginAt: user.lastLoginAt,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
});

const createTokensForUser = async ({ user, userAgent, ipAddress }) => {
  const accessToken = signAccessToken(user);
  const refreshToken = signRefreshToken(user);
  const refreshTokenHash = hashToken(refreshToken);
  const refreshTokenExpiresAt = getTokenExpiresAt(refreshToken);

  await RefreshToken.create({
    user: user.id ? user.id : user._id,
    tokenHash: refreshTokenHash,
    expiresAt: refreshTokenExpiresAt,
    userAgent: userAgent || null,
    createdByIp: ipAddress || null,
  });

  return {
    accessToken,
    refreshToken,
    refreshTokenExpiresAt,
  };
};

const signup = async ({ name, email, password, userAgent, ipAddress }) => {
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new AppError("Email already in use", 409);
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  const tokens = await createTokensForUser({
    user,
    userAgent,
    ipAddress,
  });

  return {
    user: serializeUser(user),
    ...tokens,
  };
};

const signin = async ({ email, password, userAgent, ipAddress }) => {
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new AppError(INVALID_AUTH_MESSAGE, 401);
  }

  const isPasswordValid = await user.comparePassword(password);

  if (!isPasswordValid) {
    throw new AppError(INVALID_AUTH_MESSAGE, 401);
  }

  user.lastLoginAt = new Date();
  await user.save({ validateBeforeSave: false });

  const tokens = await createTokensForUser({
    user,
    userAgent,
    ipAddress,
  });

  return {
    user: serializeUser(user),
    ...tokens,
  };
};

const refreshSession = async ({ refreshToken, userAgent, ipAddress }) => {
  let payload;
  try {
    payload = verifyRefreshToken(refreshToken);
  } catch (error) {
    throw new AppError(INVALID_REFRESH_MESSAGE, 401);
  }

  if (payload.type !== "refresh") {
    throw new AppError(INVALID_REFRESH_MESSAGE, 401);
  }

  const existingTokenHash = hashToken(refreshToken);

  const existingToken = await RefreshToken.findOne({
    tokenHash: existingTokenHash,
    revokedAt: null,
  });

  if (!existingToken || existingToken.expiresAt <= new Date()) {
    throw new AppError(INVALID_REFRESH_MESSAGE, 401);
  }

  if (existingToken.user.toString() !== payload.sub) {
    throw new AppError(INVALID_REFRESH_MESSAGE, 401);
  }

  const user = await User.findById(payload.sub);

  if (!user) {
    throw new AppError(INVALID_REFRESH_MESSAGE, 401);
  }

  const nextTokens = await createTokensForUser({
    user,
    userAgent,
    ipAddress,
  });

  existingToken.revokedAt = new Date();
  existingToken.replacedByTokenHash = hashToken(nextTokens.refreshToken);
  await existingToken.save();

  return {
    user: serializeUser(user),
    ...nextTokens,
  };
};

const signout = async ({ refreshToken }) => {
  if (!refreshToken) {
    return;
  }

  const tokenHash = hashToken(refreshToken);

  await RefreshToken.findOneAndUpdate(
    {
      tokenHash,
      revokedAt: null,
    },
    {
      revokedAt: new Date(),
    }
  );
};

const signoutAll = async ({ userId }) => {
  await RefreshToken.updateMany(
    {
      user: userId,
      revokedAt: null,
    },
    {
      revokedAt: new Date(),
    }
  );
};

const getCurrentUser = async ({ userId }) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return serializeUser(user);
};

module.exports = {
  signup,
  signin,
  refreshSession,
  signout,
  signoutAll,
  getCurrentUser,
};
