import { Document, Types } from "mongoose";
import { IBook } from "./IBook";
import { IEvent } from "./IEvent";

export interface IAuthor extends Document {
  id: Types.ObjectId;
  name: string;
  age: number;
  nationality: string;
  books?: IBook[];
  events?: IEvent[];
}
