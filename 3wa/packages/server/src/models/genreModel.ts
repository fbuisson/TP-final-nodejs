import { db } from "../config/pool";
import logger from "../utils/logger";
import { eq } from "drizzle-orm";
import { Genre, NewGenre } from "../entities/Genre";
import { genres } from "../schema/genres";

export const getAllGenres = async () => {
  try {
    return db
      .select({
        id: genres.id,
        name: genres.name,
      })
      .from(genres)
      .execute();
  } catch (err: any) {
    logger.error(`Erreur lors de la récupération des genres: ${err.message}`);
    return;
  }
};

export const getGenreById = async (id: string) => {
  try {
    return db
      .select({
        id: genres.id,
        name: genres.name,
      })
      .from(genres)
      .where(eq(genres.id, id))
      .execute();
  } catch (err: any) {
    logger.error(`Erreur lors de la récupération du genre: ${err.message}`);
    return null;
  }
};

export const addGenre = async (genre: NewGenre) => {
  try {
    return db
      .insert(genres)
      .values(genre)
      .returning({ id: genres.id })
      .execute();
  } catch (err: any) {
    logger.error(`Erreur lors de la création du nouveau genre: ${err.message}`);
    return null;
  }
};

export const updateGenre = async (id: string, genre: Genre) => {
  try {
    return db.update(genres).set(genre).where(eq(genres.id, id)).execute();
  } catch (err: any) {
    logger.error(`Erreur lors de la mise à jour du genre: ${err.message}`);
    return null;
  }
};

export const deleteGenre = async (id: string) => {
  try {
    return db.delete(genres).where(eq(genres.id, id)).execute();
  } catch (err: any) {
    logger.error(`Erreur lors de la suppression du genre: ${err.message}`);
    return null;
  }
};
