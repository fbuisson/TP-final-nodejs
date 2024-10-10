import { db } from "../config/pool";
import { Book, NewBook } from "../entities/Book";
import logger from "../utils/logger";
import { eq } from "drizzle-orm";
import { books } from "../schema/books";
import { authors, genres, bookGenres } from "../schema";

export const getAllBooks = async () => {
  try {
    return db
      .select({
        id: books.id,
        title: books.title,
        summary: books.summary,
        genres: {
          name: genres.name,
        },
        author: {
          name: authors.id,
        },
      })
      .from(books)
      .leftJoin(authors, eq(books.authorId, authors.id))
      .leftJoin(bookGenres, eq(books.id, bookGenres.bookId))
      .leftJoin(genres, eq(books.authorId, genres.id))
      .execute();
  } catch (err: any) {
    logger.error(`Erreur lors de la récupération des livres: ${err.message}`);
    return;
  }
};

export const getBookById = async (id: string) => {
  try {
    return db
      .select({
        id: books.id,
        title: books.title,
        summary: books.summary,
        genres: {
          name: genres.name,
        },
        author: {
          name: authors.id,
        },
      })
      .from(books)
      .leftJoin(authors, eq(books.authorId, authors.id))
      .leftJoin(bookGenres, eq(bookGenres.bookId, books.id))
      .leftJoin(genres, eq(books.authorId, genres.id))
      .where(eq(books.id, id))
      .execute();
  } catch (err: any) {
    logger.error(`Erreur lors de la récupération des livres: ${err.message}`);
    return;
  }
};

export const getBooksByAuthorId = async (authorId: string) => {
  try {
    return db
      .select({
        id: books.id,
        title: books.title,
        summary: books.summary,
        genres: {
          name: genres.name,
        },
        author: {
          name: authors.id,
        },
      })
      .from(books)
      .leftJoin(authors, eq(books.authorId, authors.id))
      .leftJoin(genres, eq(books.authorId, genres.id))
      .leftJoin(bookGenres, eq(bookGenres.bookId, books.id))
      .where(eq(books.authorId, authorId))
      .execute();
  } catch (err: any) {
    logger.error(
      `Erreur lors de la récupération de la liste des livres en fonction de l'auteur: ${err.message}`
    );
    return null;
  }
};

export const getBooksByGenreId = async (genreId: string) => {
  try {
    return db
      .select({
        id: books.id,
        title: books.title,
        summary: books.summary,
        genres: {
          name: genres.name,
        },
        author: {
          name: authors.id,
        },
      })
      .from(books)
      .leftJoin(authors, eq(books.authorId, authors.id))
      .leftJoin(genres, eq(books.authorId, genres.id))
      .leftJoin(bookGenres, eq(bookGenres.bookId, books.id))
      .where(eq(bookGenres.genreId, genreId))
      .execute();
  } catch (err: any) {
    logger.error(
      `Erreur lors de la récupération de la liste des livres en fonction du genre: ${err.message}`
    );
    return null;
  }
};

export const addBook = async (book: NewBook) => {
  try {
    const [createdBook] = await db.insert(books).values(book).returning();
    return createdBook;
  } catch (err: any) {
    logger.error(`Erreur lors de l'ajout d'un nouveau livre : ${err.message}`);
    return null;
  }
};

export const addBookGenres = async (
  bookGenresData: { bookId: string; genreId: string }[]
) => {
  await db.insert(bookGenres).values(bookGenresData).execute();
};

export const deleteBookGenres = async (bookId: string) => {
  await db.delete(bookGenres).where(eq(bookGenres.bookId, bookId)).execute();
};

export const updateBook = async (id: string, book: Partial<Book>) => {
  try {
    const [updatedBook] = await db
      .update(books)
      .set(book)
      .where(eq(books.id, id))
      .returning();
    return updatedBook;
  } catch (err: any) {
    logger.error(
      `Erreur lors de la modification des informations du livre : ${err.message}`
    );
    return null;
  }
};

export const deleteBook = async (id: string) => {
  try {
    db.delete(books).where(eq(books.id, id)).execute();
  } catch (err: any) {
    logger.error(`Erreur lors de la suppression du livre : ${err.message}`);
    return null;
  }
};

export const deleteBooksByAuthorId = async (authorId: string) => {
  try {
    db.delete(books).where(eq(books.authorId, authorId)).execute();
  } catch (err: any) {
    logger.error(
      `Erreur lors de la suppression du livre en fonction de l'auteur : ${err.message}`
    );
    return null;
  }
};

export const deleteGenreByGenreId = async (genresId: string) => {
  try {
    db.delete(books).where(eq(bookGenres.genreId, genresId)).execute();
  } catch (err: any) {
    logger.error(`Erreur lors de la suppression du genre : ${err.message}`);
    return null;
  }
};
