import { Router } from "express";
import {
  register,
  login,
  logout,
} from "../controllers/authentificationController";

const router = Router();

// GET http://localhost:3000/authentification/register
router.get("/register", register);

// GET http://localhost:3000/authentification/login
router.get("/login", login);

// POST http://localhost:3000/authentification/logout
router.post("/logout", logout);

export default router;
