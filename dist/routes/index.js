"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authorRoutes_1 = __importDefault(require("./authorRoutes"));
const bookRoutes_1 = __importDefault(require("./bookRoutes"));
const eventRoutes_1 = __importDefault(require("./eventRoutes"));
const genreRoutes_1 = __importDefault(require("./genreRoutes"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const router = (0, express_1.Router)();
// http://localhost:3000/authors
router.use("/authors", authorRoutes_1.default);
// http://localhost:3000/books
router.use("/books", bookRoutes_1.default);
// http://localhost:3000/events
router.use("/events", eventRoutes_1.default);
// http://localhost:3000/genres
router.use("/genres", genreRoutes_1.default);
// http://localhost:3000/users
router.use("/users", userRoutes_1.default);
exports.default = router;
