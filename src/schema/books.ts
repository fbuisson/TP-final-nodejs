import mongoose, { Schema, Types } from "mongoose";
import { IBook } from "../types/IBook";

const bookSchema: Schema = new Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  genres_id: { type: Types.ObjectId, required: true, ref: "Genre" },
  author_id: { type: Types.ObjectId, required: true, ref: "Author" },
});

export default mongoose.model<IBook>("Book", bookSchema);
