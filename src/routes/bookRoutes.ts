import { Router } from "express";
import { bookController } from "../controllers/index";
import { validateBook } from "../middlewares/validationData";

const router = Router();

// GET http://localhost:3000/books
router.get("/", bookController.getBooks);

// GET http://localhost:3000/books/:id
router.get("/:id", bookController.getBook);

// POST http://localhost:3000/books
router.post("/", validateBook, bookController.createBook);

// PUT http://localhost:3000/books/:id
router.put("/:id", validateBook, bookController.updateBook);

// DELETE http://localhost:3000/books/:id
router.delete("/:id", bookController.deleteBook);

export default router;
