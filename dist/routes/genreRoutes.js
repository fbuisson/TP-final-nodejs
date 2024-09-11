"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const validationMiddleware_1 = require("../middlewares/validationMiddleware");
const authentificationMiddleware_1 = require("../middlewares/authentificationMiddleware");
const router = (0, express_1.Router)();
// GET http://localhost:3000/genres
router.get("/", controllers_1.getGenres);
// GET http://localhost:3000/genres/:id
router.get("/:id", controllers_1.getGenre);
// POST http://localhost:3000/genres
router.post("/", authentificationMiddleware_1.authMiddleware, validationMiddleware_1.validateGenre, controllers_1.createGenre);
// PUT http://localhost:3000/genres/:id
router.put("/:id", authentificationMiddleware_1.authMiddleware, validationMiddleware_1.validateGenre, controllers_1.updateGenre);
// DELETE http://localhost:3000/genres/:id
router.delete("/:id", authentificationMiddleware_1.authMiddleware, controllers_1.deleteGenre);
exports.default = router;
