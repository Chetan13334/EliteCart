const AppError = require("../utils/app-error");
const env = require("../config/env");

const notFoundHandler = (req, res, next) => {
  next(new AppError(`Route not found: ${req.method} ${req.originalUrl}`, 404));
};

const errorHandler = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const isOperational = error.isOperational || false;

  if (!isOperational) {
    console.error(error);
  }

  const responseBody = {
    success: false,
    message: isOperational ? error.message : "Internal server error",
  };

  if (error.details) {
    responseBody.details = error.details;
  }

  if (!env.isProduction && error.stack) {
    responseBody.stack = error.stack;
  }

  res.status(statusCode).json(responseBody);
};

module.exports = {
  notFoundHandler,
  errorHandler,
};
