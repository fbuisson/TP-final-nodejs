"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const validationMiddleware_1 = require("../middlewares/validationMiddleware");
const authentificationMiddleware_1 = require("../middlewares/authentificationMiddleware");
const router = (0, express_1.Router)();
// GET http://localhost:3000/authors
router.get("/", controllers_1.getAuthors);
// GET http://localhost:3000/authors/:id
router.get("/:id", controllers_1.getAuthor);
// POST http://localhost:3000/authors
router.post("/", authentificationMiddleware_1.authMiddleware, validationMiddleware_1.validateAuthor, controllers_1.createAuthor);
// PUT http://localhost:3000/authors/:id
router.put("/:id", authentificationMiddleware_1.authMiddleware, validationMiddleware_1.validateAuthor, controllers_1.updateAuthor);
// DELETE http://localhost:3000/authors/:id
router.delete("/:id", authentificationMiddleware_1.authMiddleware, controllers_1.deleteAuthor);
exports.default = router;
