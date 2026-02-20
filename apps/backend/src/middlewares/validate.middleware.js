const AppError = require("../utils/app-error");

const validate = (schema) => (req, res, next) => {
  const parsed = schema.safeParse({
    body: req.body,
    params: req.params,
    query: req.query,
  });

  if (!parsed.success) {
    const details = parsed.error.issues.map((issue) => ({
      path: issue.path.join("."),
      message: issue.message,
    }));

    return next(new AppError("Validation failed", 400, details));
  }

  req.body = parsed.data.body;
  req.params = parsed.data.params;
  req.query = parsed.data.query;
  return next();
};

module.exports = validate;
