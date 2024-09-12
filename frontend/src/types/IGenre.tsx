import { Document, Types } from "mongoose";

export interface IGenre extends Document {
  id: Types.ObjectId;
  label: string;
}
