"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_js_1 = require("../controllers/index.js");
const router = (0, express_1.Router)();
// [VIEW - GET] http://localhost:3000/views
router.get("/", index_js_1.viewController.viewHomepage);
// [VIEW - GET] http://localhost:3000/views/authors
router.get("/authors", index_js_1.viewController.viewAuthorsPage);
// [VIEW - GET] http://localhost:3000/views/authors/:id
router.get("/authors/:id", index_js_1.viewController.viewDetailsAuthorPage);
// [VIEW - GET] http://localhost:3000/views/books
router.get("/books", index_js_1.viewController.viewBooksPage);
// [VIEW - GET] http://localhost:3000/views/events
router.get("/events", index_js_1.viewController.viewEventsPage);
// [VIEW - GET] http://localhost:3000/views/genres
router.get("/genres", index_js_1.viewController.viewGenresPage);
exports.default = router;
