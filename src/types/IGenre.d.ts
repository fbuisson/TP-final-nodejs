import { Document, Types } from "mongoose";

export interface IGenre {
  id: Types.ObjectId;
  label: string;
}
