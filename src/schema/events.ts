import mongoose, { Schema, Types } from "mongoose";
import { IEvent } from "../types/IEvent";

const eventSchema: Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  date: { type: String, required: true },
  author: { type: Types.ObjectId, required: true, ref: "Author" },
});

export default mongoose.model<IEvent>("Event", eventSchema);
