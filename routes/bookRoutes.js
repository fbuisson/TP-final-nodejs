import { Router } from "express";
import { bookController } from "../controllers";

const router = Router();

// GET http://localhost:3000/books
router.get("/", bookController.getBooks);

// GET http://localhost:3000/books/:id
router.get("/:id", bookController.getBook);

// GET http://localhost:3000/books/genre/:id
router.get("/genre/:id", bookController.getBookListGenre);

// GET http://localhost:3000/books/author/:id
router.get("/author/:id", bookController.getBookListAuthor);

// POST http://localhost:3000/books
router.post("/", bookController.createBook);

// PUT http://localhost:3000/books/:id
router.put("/:id", bookController.updateBook);

// DELETE http://localhost:3000/books/:id
router.delete("/:id", bookController.deleteBook);

export default router;
