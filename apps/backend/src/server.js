const http = require("http");
const app = require("./app");
const env = require("./config/env");
const { connectToDatabase, disconnectDatabase } = require("./config/database");

let server;
let shuttingDown = false;

const startServer = async () => {
  try {
    await connectToDatabase();

    server = http.createServer(app);
    server.listen(env.port, () => {
      console.log(`Backend running on port ${env.port}`);
    });
  } catch (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
};

const shutdown = async (signal, error) => {
  if (shuttingDown) {
    return;
  }

  shuttingDown = true;

  if (signal) {
    console.log(`Shutdown signal received: ${signal}`);
  }

  if (error) {
    console.error(error);
  }

  const exitCode = error ? 1 : 0;

  try {
    await Promise.all([
      new Promise((resolve) => {
        if (!server) {
          resolve();
          return;
        }

        server.close(() => resolve());
      }),
      disconnectDatabase(),
    ]);
  } catch (shutdownError) {
    console.error("Error during graceful shutdown", shutdownError);
    process.exit(1);
  }

  process.exit(exitCode);
};

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("uncaughtException", (error) => shutdown("uncaughtException", error));
process.on("unhandledRejection", (reason) => {
  const error = reason instanceof Error ? reason : new Error(String(reason));
  shutdown("unhandledRejection", error);
});

startServer();
