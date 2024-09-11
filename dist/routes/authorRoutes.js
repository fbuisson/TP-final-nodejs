"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controllers/index");
const validationData_1 = require("../middlewares/validationData");
const router = (0, express_1.Router)();
// GET http://localhost:3000/authors
router.get("/", index_1.authorController.getAuthors);
// GET http://localhost:3000/authors/:id
router.get("/:id", index_1.authorController.getAuthor);
// POST http://localhost:3000/authors
router.post("/", validationData_1.validateAuthor, index_1.authorController.createAuthor);
// PUT http://localhost:3000/authors/:id
router.put("/:id", validationData_1.validateAuthor, index_1.authorController.updateAuthor);
// DELETE http://localhost:3000/authors/:id
router.delete("/:id", index_1.authorController.deleteAuthor);
exports.default = router;
