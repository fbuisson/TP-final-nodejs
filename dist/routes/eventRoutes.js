"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controllers/index");
const validationMiddleware_1 = require("../middlewares/validationMiddleware");
const authentificationMiddleware_1 = require("../middlewares/authentificationMiddleware");
const router = (0, express_1.Router)();
// GET http://localhost:3000/events
router.get("/", index_1.getEvents);
// GET http://localhost:3000/events/:id
router.get("/:id", index_1.getEvent);
// POST http://localhost:3000/events
router.post("/", authentificationMiddleware_1.authMiddleware, validationMiddleware_1.validateEvent, index_1.createEvent);
// PUT http://localhost:3000/events/:id
router.put("/:id", authentificationMiddleware_1.authMiddleware, validationMiddleware_1.validateEvent, index_1.updateEvent);
// DELETE http://localhost:3000/events/:id
router.delete("/:id", authentificationMiddleware_1.authMiddleware, index_1.deleteEvent);
exports.default = router;
