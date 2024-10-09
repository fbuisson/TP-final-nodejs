import { Router } from "express";
import {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers";
import { validateBook } from "../middlewares/validationMiddleware";
import { authMiddleware } from "../middlewares/authentificationMiddleware";

const router = Router();

// GET http://localhost:3000/books
router.get("/", getBooks);

// GET http://localhost:3000/books/:id
router.get("/:id", getBook);

// POST http://localhost:3000/books
router.post("/", authMiddleware, validateBook, createBook);

// PUT http://localhost:3000/books/:id
router.put("/:id", authMiddleware, validateBook, updateBook);

// DELETE http://localhost:3000/books/:id
router.delete("/:id", authMiddleware, deleteBook);

export default router;
