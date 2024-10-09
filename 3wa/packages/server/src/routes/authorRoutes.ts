import { Router } from "express";
import {
  getAuthors,
  getAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} from "../controllers";
import { validateAuthor } from "../middlewares/validationMiddleware";
import { authMiddleware } from "../middlewares/authentificationMiddleware";

const router = Router();

// GET http://localhost:3000/authors
router.get("/", getAuthors);

// GET http://localhost:3000/authors/:id
router.get("/:id", getAuthor);

// POST http://localhost:3000/authors
router.post("/", authMiddleware, validateAuthor, createAuthor);

// PUT http://localhost:3000/authors/:id
router.put("/:id", authMiddleware, validateAuthor, updateAuthor);

// DELETE http://localhost:3000/authors/:id
router.delete("/:id", authMiddleware, deleteAuthor);

export default router;
