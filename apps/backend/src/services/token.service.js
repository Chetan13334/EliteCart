const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const env = require("../config/env");

const hashToken = (token) => crypto.createHash("sha256").update(token).digest("hex");

const buildTokenPayload = (user) => ({
  sub: user.id ? user.id.toString() : user._id.toString(),
  role: user.role,
});

const signAccessToken = (user) =>
  jwt.sign(
    {
      ...buildTokenPayload(user),
      type: "access",
    },
    env.accessTokenSecret,
    { expiresIn: env.accessTokenExpiresIn }
  );

const signRefreshToken = (user) =>
  jwt.sign(
    {
      ...buildTokenPayload(user),
      type: "refresh",
      jti: crypto.randomUUID(),
    },
    env.refreshTokenSecret,
    { expiresIn: env.refreshTokenExpiresIn }
  );

const verifyAccessToken = (token) => jwt.verify(token, env.accessTokenSecret);

const verifyRefreshToken = (token) => jwt.verify(token, env.refreshTokenSecret);

const getTokenExpiresAt = (token) => {
  const decoded = jwt.decode(token);

  if (!decoded || typeof decoded === "string" || !decoded.exp) {
    throw new Error("Token expiration is missing");
  }

  return new Date(decoded.exp * 1000);
};

module.exports = {
  hashToken,
  signAccessToken,
  signRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
  getTokenExpiresAt,
};
