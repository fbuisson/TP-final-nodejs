import { Types } from "mongoose";
import { IBook } from "../types/IBook";
import Book from "../schema/books";

export const getAllBooks = async () => {
  try {
    return await Book.find().exec();
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getBookById = async (id: Types.ObjectId) => {
  try {
    const book = await Book.findById(id).exec();
    return book;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getBooksByAuthorId = async (id: Types.ObjectId) => {
  try {
    return await Book.find({ author_id: id })
      .populate({
        path: "author_id",
        select: "name",
      })
      .exec();
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getBooksByGenreId = async (id: Types.ObjectId) => {
  try {
    return await Book.find({ genres_id: id })
      .populate({
        path: "genres_id",
        select: "label",
      })
      .exec();
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const addBook = async (book: IBook) => {
  try {
    return await Book.create(book);
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const updateBook = async (id: Types.ObjectId, book: IBook) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, book, { new: true });

    if (!updatedBook) {
      console.error(`Book with ID ${id} not found`);
    }

    return updatedBook;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const deleteBook = (id: Types.ObjectId) => {
  try {
    return Book.deleteOne({ _id: id }).exec();
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const deleteBooksByAuthorId = (authorId: Types.ObjectId) => {
  try {
    return Book.deleteOne({ author_id: authorId }).exec();
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const deleteGenreByGenreId = async (id: Types.ObjectId) => {
  try {
    const result = await Book.updateMany(
      { genres_id: id },
      { $pull: { genres_id: id } }
    ).exec();

    return result;
  } catch (err) {
    console.error(err);
    return null;
  }
};
