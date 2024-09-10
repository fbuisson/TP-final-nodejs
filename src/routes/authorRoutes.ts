import { Router } from "express";
import { authorController } from "../controllers/index";
import { validateAuthor } from "../middlewares/validationData";

const router = Router();

// GET http://localhost:3000/authors
router.get("/", authorController.getAuthors);

// GET http://localhost:3000/authors/:id
router.get("/:id", authorController.getAuthor);

// POST http://localhost:3000/authors
router.post("/", validateAuthor, authorController.createAuthor);

// PUT http://localhost:3000/authors/:id
router.put("/:id", validateAuthor, authorController.updateAuthor);

// DELETE http://localhost:3000/authors/:id
router.delete("/:id", authorController.deleteAuthor);

export default router;
