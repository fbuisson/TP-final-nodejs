import { Document, Types } from "mongoose";
import { IAuthor } from "./IAuthor";

export interface IEvent {
  id: Types.ObjectId;
  name: string;
  address: string;
  date: string;
  author: IAuthor;
}
