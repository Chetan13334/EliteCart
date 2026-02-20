const mongoose = require("mongoose");
const env = require("./env");

let hasConnected = false;

const connectToDatabase = async () => {
  if (hasConnected) {
    return mongoose.connection;
  }

  mongoose.set("strictQuery", true);

  await mongoose.connect(env.mongodbUri, {
    dbName: env.mongodbDbName,
    autoIndex: env.nodeEnv !== "production",
    maxPoolSize: env.mongodbMaxPoolSize,
    serverSelectionTimeoutMS: env.mongodbServerSelectionTimeoutMs,
    socketTimeoutMS: env.mongodbSocketTimeoutMs,
  });

  hasConnected = true;
  console.log(`MongoDB connected: ${mongoose.connection.host}`);
  return mongoose.connection;
};

const disconnectDatabase = async () => {
  if (!hasConnected) {
    return;
  }

  await mongoose.connection.close(false);
  hasConnected = false;
  console.log("MongoDB disconnected");
};

module.exports = {
  connectToDatabase,
  disconnectDatabase,
};
