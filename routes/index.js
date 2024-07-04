import { Router } from "express";
import authorRoutes from "./authorRoute.js";
import bookRoutes from "./bookRoutes.js";
import eventRoutes from "./eventRoutes.js";
import genreRoutes from "./genreRoutes.js";

const router = Router();

// http://localhost:3000/authors
router.use("/authors", authorRoutes);

// http://localhost:3000/books
router.use("/books", bookRoutes);

// http://localhost:3000/events
router.use("/events", eventRoutes);

// http://localhost:3000/genres
router.use("/genres", genreRoutes);

export default router;
