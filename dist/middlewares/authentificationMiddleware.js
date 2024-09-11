"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const env_1 = require("../config/env");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const response_1 = require("../utils/response");
const { JWT_SECRET } = env_1.env;
const authMiddleware = (request, response, next) => {
    const token = request.cookies.token;
    if (!token)
        return (0, response_1.APIResponse)(response, null, "Vous n'êtes pas authentifié", 401);
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        response.locals.user = decoded;
        next();
    }
    catch (error) {
        return (0, response_1.APIResponse)(response, null, "Vous n'êtes pas authentifié", 401);
    }
};
exports.authMiddleware = authMiddleware;
