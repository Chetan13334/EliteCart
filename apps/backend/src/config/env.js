const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const nodeEnv = process.env.NODE_ENV || "development";
const isProduction = nodeEnv === "production";

const requiredInAllEnvs = ["MONGODB_URI", "JWT_ACCESS_SECRET", "JWT_REFRESH_SECRET"];
const missingEnv = requiredInAllEnvs.filter((key) => !process.env[key]);

if (missingEnv.length > 0) {
  throw new Error(`Missing required environment variables: ${missingEnv.join(", ")}`);
}

const parseOrigins = (value) =>
  value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

const parsePositiveInt = (value, fallback) => {
  const parsed = Number.parseInt(value || "", 10);

  if (Number.isNaN(parsed) || parsed <= 0) {
    return fallback;
  }

  return parsed;
};

const env = {
  nodeEnv,
  isProduction,
  port: parsePositiveInt(process.env.PORT, 5000),
  mongodbUri: process.env.MONGODB_URI,
  mongodbDbName: process.env.MONGODB_DB_NAME || undefined,
  mongodbMaxPoolSize: parsePositiveInt(process.env.MONGODB_MAX_POOL_SIZE, 20),
  mongodbServerSelectionTimeoutMs: parsePositiveInt(process.env.MONGODB_SERVER_SELECTION_TIMEOUT_MS, 10000),
  mongodbSocketTimeoutMs: parsePositiveInt(process.env.MONGODB_SOCKET_TIMEOUT_MS, 45000),
  clientOrigins: parseOrigins(process.env.CLIENT_ORIGIN || "http://localhost:5173"),
  accessTokenSecret: process.env.JWT_ACCESS_SECRET,
  refreshTokenSecret: process.env.JWT_REFRESH_SECRET,
  accessTokenExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN || "15m",
  refreshTokenExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "7d",
  refreshCookieName: process.env.REFRESH_COOKIE_NAME || "elitecart_refresh_token",
  refreshCookieDomain: process.env.REFRESH_COOKIE_DOMAIN || undefined,
};

module.exports = env;
