import { Router } from "express";
import {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/index";
import { validateEvent } from "../middlewares/validationMiddleware";
import { authMiddleware } from "../middlewares/authentificationMiddleware";

const router = Router();

// GET http://localhost:3000/events
router.get("/", getEvents);

// GET http://localhost:3000/events/:id
router.get("/:id", getEvent);

// POST http://localhost:3000/events
router.post("/", authMiddleware, validateEvent, createEvent);

// PUT http://localhost:3000/events/:id
router.put("/:id", authMiddleware, validateEvent, updateEvent);

// DELETE http://localhost:3000/events/:id
router.delete("/:id", authMiddleware, deleteEvent);

export default router;
