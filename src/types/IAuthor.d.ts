import { Document, Types } from "mongoose";

export interface IAuthor {
  id: Types.ObjectId;
  name: string;
  age: number;
  nationality: string;
}
