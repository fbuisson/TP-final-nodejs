"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const validationMiddleware_1 = require("../middlewares/validationMiddleware");
const authentificationMiddleware_1 = require("../middlewares/authentificationMiddleware");
const router = (0, express_1.Router)();
// GET http://localhost:3000/books
router.get("/", controllers_1.getBooks);
// GET http://localhost:3000/books/:id
router.get("/:id", controllers_1.getBook);
// POST http://localhost:3000/books
router.post("/", authentificationMiddleware_1.authMiddleware, validationMiddleware_1.validateBook, controllers_1.createBook);
// PUT http://localhost:3000/books/:id
router.put("/:id", authentificationMiddleware_1.authMiddleware, validationMiddleware_1.validateBook, controllers_1.updateBook);
// DELETE http://localhost:3000/books/:id
router.delete("/:id", authentificationMiddleware_1.authMiddleware, controllers_1.deleteBook);
exports.default = router;
