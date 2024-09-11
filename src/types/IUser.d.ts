import { Document, Types } from "mongoose";
import { IComment } from "./IComment";
import { IPost } from "./IPost";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  posts?: IPost[];
  comments?: IComment[];
}
