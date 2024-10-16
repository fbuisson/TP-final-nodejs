import { Request, Response } from "express";
import { bookModel, genreModel } from "../models";
import { APIResponse } from "../utils/response";

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
    const book = await bookModel.getBookById(id);
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
      const genre = await genreModel.getGenreById(genreId);
      if (!genre) valid = false;
    }

    if (valid) {
      const createdBook = await bookModel.addBook({
        title: newBook.title,
        summary: newBook.summary,
        authorId: newBook.authorId,
      });

      const bookGenresData = newBook.genres_id.map((genreId: string) => ({
        bookId: createdBook?.id,
        genreId,
      }));

      await bookModel.addBookGenres(bookGenresData);

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
    const book = await bookModel.getBookById(id);
    let valid = true;

    for (const genreId of newBook.genres_id) {
      const genre = await genreModel.getGenreById(genreId);
      if (!genre) valid = false;
    }

    if (book && valid) {
      const updatedBook = await bookModel.updateBook(id, {
        title: newBook.title,
        summary: newBook.summary,
        authorId: newBook.authorId,
      });

      await bookModel.deleteBookGenres(id);

      const bookGenresData = newBook.genres_id.map((genreId: string) => ({
        bookId: updatedBook?.id,
        genreId,
      }));

      await bookModel.addBookGenres(bookGenresData);

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
    const book = await bookModel.getBookById(id);
    if (book) {
      await bookModel.deleteBookGenres(id);
      await bookModel.deleteBook(id);

      APIResponse(response, null, "Book was successfully deleted", 204);
    } else {
      APIResponse(response, null, "Book not found", 404);
    }
  } catch (err) {
    console.error(err);
    APIResponse(response, null, "Error deleting book", 500);
  }
};
