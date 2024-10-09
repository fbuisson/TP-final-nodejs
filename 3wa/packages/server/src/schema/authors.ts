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
  },
  {
    timestamps: true,
  }
);

AuthorSchema.virtual("books", {
  ref: "Book",
  localField: "_id",
  foreignField: "author_id",
  justOne: false
});

AuthorSchema.virtual("events", {
  ref: "Event",
  localField: "_id",
  foreignField: "author_id",
  justOne: false
});

AuthorSchema.set("toObject", { virtuals: true });
AuthorSchema.set("toJSON", { virtuals: true });


const Author = model<IAuthor>("Author", AuthorSchema);

export default Author;
