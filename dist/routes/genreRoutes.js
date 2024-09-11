"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controllers/index");
const validationData_1 = require("../middlewares/validationData");
const router = (0, express_1.Router)();
// GET http://localhost:3000/genres
router.get("/", index_1.genreController.getGenres);
// GET http://localhost:3000/genres/:id
router.get("/:id", index_1.genreController.getGenre);
// POST http://localhost:3000/genres
router.post("/", validationData_1.validateGenre, index_1.genreController.createGenre);
// PUT http://localhost:3000/genres/:id
router.put("/:id", validationData_1.validateGenre, index_1.genreController.updateGenre);
// DELETE http://localhost:3000/genres/:id
router.delete("/:id", index_1.genreController.deleteGenre);
exports.default = router;
