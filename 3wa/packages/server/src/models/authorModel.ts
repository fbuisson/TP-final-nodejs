import { db } from "../config/pool";
import { Author, NewAuthor } from "../entities/Author";
import { authors } from "../schema/authors";
import logger from "../utils/logger";
import { eq } from "drizzle-orm";

export const getAllAuthors = async () => {
  try {
    return await db.select().from(authors).execute();
  } catch (err: any) {
    logger.error(`Erreur lors de la récupération des auteurs: ${err.message}`);
    return [];
  }
};

export const getAuthorById = async (id: string) => {
  try {
    const author = await db
      .select()
      .from(authors)
      .where(eq(authors.id, id))
      .execute();
  } catch (err: any) {
    logger.error(`Erreur lors de la récupération de l'auteur: ${err.message}`);
    return null;
  }
};

export const addAuthor = async (author: NewAuthor) => {
  try {
    await db.insert(authors).values(author).execute();
  } catch (err: any) {
    logger.error(`Erreur lors de l'ajout de l'auteur: ${err.message}`);
    return null;
  }
};

export const updateAuthor = async (id: string, author: Partial<Author>) => {
  try {
    const updatedAuthor = await db
      .update(authors)
      .set(author)
      .where(eq(authors.id, id))
      .returning()
      .execute()
      .then((result) => result[0] || null);

    if (!updateAuthor) logger.error(`Author with ID ${id} not found`);

    return updateAuthor;
  } catch (err: any) {
    logger.error(`Erreur lors de la mise à jour de l'auteur: ${err.message}`);
    return null;
  }
};

export const deleteAuthor = async (id: string) => {
  try {
    const deletedAuthor = await db
      .delete(authors)
      .where(eq(authors.id, id))
      .returning()
      .then((result) => result[0] || null);

    if (!deleteAuthor) logger.error(`Author with ID ${id} not found`);

    return deletedAuthor;
  } catch (err: any) {
    logger.error(`Erreur lors de la suppression de l'auteur: ${err.message}`);
    return null;
  }
};
