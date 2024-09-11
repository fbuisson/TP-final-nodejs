"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
// [GET] http://localhost:3000/users
router.get("/", controllers_1.getUsers);
// [GET] http://localhost:3000/users/:id
router.get("/:id", controllers_1.getUser);
exports.default = router;
