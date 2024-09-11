"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = require("mongoose");
const env_1 = require("./env");
const { MONGO_URI } = env_1.env;
console.log("### L'URL :", MONGO_URI);
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const c = yield (0, mongoose_1.connect)(MONGO_URI);
        console.log(`MongoDB connected: ${c.connection.host}`);
    }
    catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // pour quitter l'app avec un code d'erreur (1 => erreur, 0 => succès)
    }
});
exports.connectDB = connectDB;
