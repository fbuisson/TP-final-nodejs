"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authentificationController_1 = require("../controllers/authentificationController");
const router = (0, express_1.Router)();
// GET http://localhost:3000/authentification/register
router.get("/register", authentificationController_1.register);
// GET http://localhost:3000/authentification/login
router.get("/login", authentificationController_1.login);
// POST http://localhost:3000/authentification/logout
router.post("/logout", authentificationController_1.logout);
exports.default = router;
