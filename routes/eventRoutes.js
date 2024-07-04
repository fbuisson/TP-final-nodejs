import { Router } from "express";
import { eventController } from "../controllers";

const router = Router();

// GET http://localhost:3000/events
router.get("/", eventController.getAuthors);

// GET http://localhost:3000/events/:id
router.get("/:id", eventController.getEvent);

// POST http://localhost:3000/events
router.post("/", eventController.createEvent);

// PUT http://localhost:3000/events/:id
router.put("/:id", eventController.updateEvent);

// DELETE http://localhost:3000/events/:id
router.delete("/:id", eventController.deleteEvent);

export default router;
