import { Document, Types } from "mongoose";

export interface IAuthor extends Document {
  id: Types.ObjectId;
  name: string;
  age: number;
  nationality: string;
  books?: IBook[];
  events?: IEvent[];
}
