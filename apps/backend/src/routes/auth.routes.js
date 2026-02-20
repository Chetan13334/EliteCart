const express = require("express");
const authController = require("../controllers/auth.controller");
const validate = require("../middlewares/validate.middleware");
const { requireAuth } = require("../middlewares/auth.middleware");
const { signupSchema, signinSchema, refreshSchema, signoutSchema } = require("../validators/auth.validator");

const router = express.Router();

router.post("/signup", validate(signupSchema), authController.signup);
router.post("/signin", validate(signinSchema), authController.signin);
router.post("/refresh", validate(refreshSchema), authController.refresh);
router.post("/signout", validate(signoutSchema), authController.signout);
router.post("/signout-all", requireAuth, authController.signoutAll);
router.get("/me", requireAuth, authController.me);

module.exports = router;
