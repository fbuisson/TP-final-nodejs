"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controllers/index");
const validationData_1 = require("../middlewares/validationData");
const router = (0, express_1.Router)();
// GET http://localhost:3000/events
router.get("/", index_1.eventController.getEvents);
// GET http://localhost:3000/events/:id
router.get("/:id", index_1.eventController.getEvent);
// POST http://localhost:3000/events
router.post("/", validationData_1.validateEvent, index_1.eventController.createEvent);
// PUT http://localhost:3000/events/:id
router.put("/:id", validationData_1.validateEvent, index_1.eventController.updateEvent);
// DELETE http://localhost:3000/events/:id
router.delete("/:id", index_1.eventController.deleteEvent);
exports.default = router;
