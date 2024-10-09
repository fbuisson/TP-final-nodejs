import { Document, Types } from "mongoose";

export interface IBook {
  _id?: Types.ObjectId;
  title: string;
  summary: string;
  genres_id: Types.ObjectId[];
  author_id: Types.ObjectId;
}
