"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controllers/index");
const validationData_1 = require("../middlewares/validationData");
const router = (0, express_1.Router)();
// GET http://localhost:3000/books
router.get("/", index_1.bookController.getBooks);
// GET http://localhost:3000/books/:id
router.get("/:id", index_1.bookController.getBook);
// POST http://localhost:3000/books
router.post("/", validationData_1.validateBook, index_1.bookController.createBook);
// PUT http://localhost:3000/books/:id
router.put("/:id", validationData_1.validateBook, index_1.bookController.updateBook);
// DELETE http://localhost:3000/books/:id
router.delete("/:id", index_1.bookController.deleteBook);
exports.default = router;
