import { Schema, model, Types } from "mongoose";
import { IAuthor } from "../types/IAuthor";

const AuthorSchema = new Schema<IAuthor>(
  {
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
        type: Types.ObjectId,
        ref: "Book",
      },
    ],
    events: [
      {
        type: Types.ObjectId,
        ref: "Event",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Author = model<IAuthor>("Author", AuthorSchema);

export default Author;
