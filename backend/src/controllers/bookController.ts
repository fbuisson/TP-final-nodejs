import { Request, Response } from "express";
import { bookModel, genreModel } from "../models";
import { APIResponse } from "../utils/response";
import { Types } from "mongoose";

export const getBooks = async (request: Request, response: Response) => {
  try {
    const books = await bookModel.getAllBooks();
    APIResponse(response, books, "List of all books", 200);
  } catch (err) {
    console.error(err);
    APIResponse(response, null, "Error fetching books", 500);
  }
};

export const getBook = async (request: Request, response: Response) => {
  const { id } = request.params;
  try {
    const book = await bookModel.getBookById(new Types.ObjectId(id));
    if (book) {
      APIResponse(response, book, "Book found", 200);
    } else {
      APIResponse(response, null, "Book not found", 404);
    }
  } catch (err) {
    console.error(err);
    APIResponse(response, null, "Error fetching book", 500);
  }
};

export const createBook = async (request: Request, response: Response) => {
  try {
    const newBook = request.body;
    let valid = true;

    for (const genreId of newBook.genres_id) {
      const genre = await genreModel.getGenreById(new Types.ObjectId(genreId));
      if (!genre) valid = false;
    }

    if (valid) {
      const createdBook = await bookModel.addBook(newBook);
      APIResponse(response, createdBook, "New book created", 201);
    } else {
      APIResponse(response, null, "Genre not valid", 404);
    }
  } catch (err) {
    console.error(err);
    APIResponse(response, null, "Error creating book", 500);
  }
};

export const updateBook = async (request: Request, response: Response) => {
  const { id } = request.params;
  const newBook = request.body;
  try {
    const book = await bookModel.getBookById(new Types.ObjectId(id));
    let valid = true;

    for (const genreId of newBook.genres_id) {
      const genre = await genreModel.getGenreById(new Types.ObjectId(genreId));
      if (!genre) valid = false;
    }

    if (book && valid) {
      const updatedBook = await bookModel.updateBook(
        new Types.ObjectId(id),
        newBook
      );
      APIResponse(response, updatedBook, "Book was successfully modified", 200);
    } else {
      APIResponse(response, null, "Book not found or invalid genre", 404);
    }
  } catch (err) {
    console.error(err);
    APIResponse(response, null, "Error updating book", 500);
  }
};

export const deleteBook = async (request: Request, response: Response) => {
  const { id } = request.params;
  try {
    const book = await bookModel.getBookById(new Types.ObjectId(id));
    if (book) {
      await bookModel.deleteBook(new Types.ObjectId(id));
      APIResponse(response, null, "Book was successfully deleted", 204);
    } else {
      APIResponse(response, null, "Book not found", 404);
    }
  } catch (err) {
    console.error(err);
    APIResponse(response, null, "Error deleting book", 500);
  }
};
