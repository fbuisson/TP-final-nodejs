import { Router } from "express";
import authorRoutes from "./authorRoutes.js";
import bookRoutes from "./bookRoutes.js";
import eventRoutes from "./eventRoutes.js";
import genreRoutes from "./genreRoutes.js";
import viewRoutes from "./viewRoutes.js";

const router = Router();

// http://localhost:3000/authors
router.use("/authors", authorRoutes);

// http://localhost:3000/books
router.use("/books", bookRoutes);

// http://localhost:3000/events
router.use("/events", eventRoutes);

// http://localhost:3000/genres
router.use("/genres", genreRoutes);

// http://localhost:3000/views
router.use("/views", viewRoutes);

export default router;
