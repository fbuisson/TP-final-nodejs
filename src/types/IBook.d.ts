import { Document, Types } from "mongoose";
import { IAuthor } from "./IAuthor";
import { IGenre } from "./IGenre";

export interface IBook {
  id: Types.ObjectId;
  title: string;
  summary: string;
  genre: IGenre;
  author: IAuthor;
}
