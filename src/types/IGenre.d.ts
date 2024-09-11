import { Document, ObjectId } from "mongoose";

export interface IGenre {
  id: ObjectId;
  label: string;
}
