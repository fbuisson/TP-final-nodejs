"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AuthorSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        min: 0,
    },
    nationality: {
        type: String,
        required: true,
        trim: true,
    },
    books: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: "Book",
        },
    ],
    events: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: "Event",
        },
    ],
}, {
    timestamps: true,
});
const Author = (0, mongoose_1.model)("Author", AuthorSchema);
exports.default = Author;
