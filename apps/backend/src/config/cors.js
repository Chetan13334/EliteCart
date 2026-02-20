const env = require("./env");

const corsOptions = {
  origin(origin, callback) {
    if (!origin || env.clientOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("CORS origin denied"));
  },
  credentials: true,
};

module.exports = corsOptions;
