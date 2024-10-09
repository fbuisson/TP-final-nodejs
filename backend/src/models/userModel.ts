import { Types } from "mongoose";
import { IUser } from "../types/IUser";
import User from "../schema/users";

export const getAllUsers = async (): Promise<IUser[]> => {
  try {
    return User.find().select("name email").exec();
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getUserById = async (
  id: Types.ObjectId
): Promise<{ user: IUser } | null> => {
  try {
    const user = await User.findById(id).select("name email").exec();
    if (!user) return null;

    return { user: user.toObject() };
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const addUser = (user: Partial<IUser>) => {
  try {
    return User.create(user);
  } catch (err) {
    console.error(err);
  }
};

export const updateUser = async (id: Types.ObjectId, userData: Partial<IUser>): Promise<IUser | null> => {
  try {
      return User.findByIdAndUpdate(id, userData, { new: true }).exec();
  } catch (err: any) {
      console.error(err);
      return null;
  }
}

export const findByCredentials = async (email: string): Promise<any> => {
  try {
    return User.findOne({ email }).select("password").exec();
  } catch (err) {
    console.error(err);
    return null;
  }
};
