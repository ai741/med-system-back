import { Router } from "express";
import * as AuthController from "../controllers/AuthController.js";
import handleValidationErrors from "../validation/handleValidationErrors.js";
import checkAuth from "../middleware/checkAuth.js";
import { loginValidator, registerValidator } from "../validation/validation.js";

const router = new Router();

router.post(
  "/registration",
  handleValidationErrors,
  registerValidator,
  AuthController.registration
);
router.post(
  "/login",
  handleValidationErrors,
  loginValidator,
  AuthController.login
);

router.get("/me", checkAuth, AuthController.getMe);

export default router;
