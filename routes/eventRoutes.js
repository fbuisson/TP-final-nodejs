import { Router } from "express";
import { eventController } from "../controllers/index.js";
import { validateEvent } from "../middlewares/validationData.js";

const router = Router();

// GET http://localhost:3000/events
router.get("/", eventController.getEvents);

// GET http://localhost:3000/events/:id
router.get("/:id", eventController.getEvent);

// POST http://localhost:3000/events
router.post("/", validateEvent, eventController.createEvent);

// PUT http://localhost:3000/events/:id
router.put("/:id", validateEvent, eventController.updateEvent);

// DELETE http://localhost:3000/events/:id
router.delete("/:id", eventController.deleteEvent);

export default router;
