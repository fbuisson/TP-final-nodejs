import { Router } from "express";
import {
  getGenres,
  getGenre,
  createGenre,
  updateGenre,
  deleteGenre,
} from "../controllers";
import { validateGenre } from "../middlewares/validationMiddleware";
import { authMiddleware } from "../middlewares/authentificationMiddleware";

const router = Router();

// GET http://localhost:3000/genres
router.get("/", getGenres);

// GET http://localhost:3000/genres/:id
router.get("/:id", getGenre);

// POST http://localhost:3000/genres
router.post("/", authMiddleware, validateGenre, createGenre);

// PUT http://localhost:3000/genres/:id
router.put("/:id", authMiddleware, validateGenre, updateGenre);

// DELETE http://localhost:3000/genres/:id
router.delete("/:id", authMiddleware, deleteGenre);

export default router;
