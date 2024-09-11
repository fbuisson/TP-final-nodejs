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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByCredentials = exports.updateUser = exports.addUser = exports.getUserById = exports.getAllUsers = void 0;
const users_1 = __importDefault(require("../schema/users"));
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return users_1.default.find().select("name email").exec();
    }
    catch (err) {
        console.error(err);
        return [];
    }
});
exports.getAllUsers = getAllUsers;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield users_1.default.findById(id).select("name email").exec();
        if (!user)
            return null;
        return { user: user.toObject() };
    }
    catch (err) {
        console.error(err);
        return null;
    }
});
exports.getUserById = getUserById;
const addUser = (user) => {
    try {
        return users_1.default.create(user);
    }
    catch (err) {
        console.error(err);
    }
};
exports.addUser = addUser;
const updateUser = (id, userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return users_1.default.findByIdAndUpdate(id, userData, { new: true }).exec();
    }
    catch (err) {
        console.error(err);
    }
});
exports.updateUser = updateUser;
const findByCredentials = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return users_1.default.findOne({ email }).select("password").exec();
    }
    catch (err) {
        console.error(err);
        return null;
    }
});
exports.findByCredentials = findByCredentials;
