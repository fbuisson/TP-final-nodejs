import { getBooksByAuthorId, deleteBooksByAuthorId } from "./bookModel";
import { getEventsByAuthorId, deleteEventsByAuthorId } from "./eventModel";
import { IAuthor } from "../types/IAuthor";
import Author from "../schema/authors";
import { Types } from "mongoose";

export const getAllAuthors = async () => {
  try {
    return await Author.find().exec();
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getAuthorById = async (id: Types.ObjectId) => {
  try {
    const author = await Author.findById(id)
      .populate("books")
      .populate("events");

    console.log(author);
    return author;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const addAuthor = async (author: IAuthor) => {
  try {
    await Author.create(author);
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const updateAuthor = async (id: Types.ObjectId, author: IAuthor) => {
  try {
    const updatedAuthor = await Author.findByIdAndUpdate(id, author, {
      new: true,
    });

    if (!updatedAuthor) {
      console.error(`Author with ID ${id} not found`);
    }

    return updateAuthor;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const deleteAuthor = async (id: Types.ObjectId) => {
  try {
    const deletedAuthor = await Author.findByIdAndDelete(id);

    if (!deleteAuthor) {
      console.error(`Author with ID ${id} not found`);
    }

    return deletedAuthor;
  } catch (err) {
    console.error(err);
    return null;
  }
};
