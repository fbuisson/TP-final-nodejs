import { Router } from "express";
import {
  register,
  login,
  logout,
} from "../controllers/authentificationController";
import { authMiddleware } from "../middlewares/authentificationMiddleware";
const router = Router();

// POST http://localhost:3000/authentification/register
router.post("/register", register);

// POST http://localhost:3000/authentification/login
router.post("/login", login);

// POST http://localhost:3000/authentification/logout
router.post("/logout", authMiddleware, logout);

export default router;
