import mongoose, { Schema, Types } from "mongoose";
import { IGenre } from "../types/IGenre";

const genreSchema: Schema = new Schema({
  label: { type: String, required: true },
});

export default mongoose.model<IGenre>("Genre", genreSchema);
