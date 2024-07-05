import { Router } from "express";
import { genreController } from "../controllers/index.js";
import { validateGenre } from "../middlewares/validationData.js";

const router = Router();

// GET http://localhost:3000/genres
router.get("/", genreController.getGenres);

// GET http://localhost:3000/genres/:id
router.get("/:id", genreController.getGenre);

// POST http://localhost:3000/genres
router.post("/", validateGenre, genreController.createGenre);

// PUT http://localhost:3000/genres/:id
router.put("/:id", validateGenre, genreController.updateGenre);

// DELETE http://localhost:3000/genres/:id
router.delete("/:id", genreController.deleteGenre);

export default router;
