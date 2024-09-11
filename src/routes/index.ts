import { Router } from "express";
import authorRoutes from "./authorRoutes";
import bookRoutes from "./bookRoutes";
import eventRoutes from "./eventRoutes";
import genreRoutes from "./genreRoutes";
import viewRoutes from "./viewRoutes";

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
