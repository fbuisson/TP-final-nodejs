import { Document, Types } from "mongoose";
import { IAuthor } from "./IAuthor";
import { IGenre } from "./IGenre";

export interface IBook extends Document {
  _id?: Types.ObjectId;
  title: string;
  summary: string;
  genres_id: Types.ObjectId[];
  author_id: Types.ObjectId;
}
