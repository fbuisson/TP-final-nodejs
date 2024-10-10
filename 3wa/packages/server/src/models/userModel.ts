import { db } from "../config/pool";
import { users } from "../schema/users";
import { NewUser, User } from "../entities/User";
import logger from "../utils/logger";
import { eq } from "drizzle-orm";

export const getAllUsers = async (): Promise<Partial<User>[]> => {
  try {
    return await db.query.users.findMany({
      columns: {
        id: true,
        name: true,
        email: true,
      },
    });
  } catch (err: any) {
    logger.error(
      `Erreur lors de la récupération des utilisateurs: ${err.message}`
    );
    throw new Error("Impossible de récupérer les utilisateurs");
  }
};

export const getUserById = async (
  id: string
): Promise<Partial<User> | null> => {
  try {
    const user = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.id, id),
      columns: {
        id: true,
        name: true,
        email: true,
      },
    });

    if (!user) return null;
    return user;
  } catch (err: any) {
    logger.error(
      `Erreur lors de la récupération de l'utilisateur: ${err.message}`
    );
    return null;
  }
};

export const addUser = async (user: NewUser) => {
  try {
    return await db
      .insert(users)
      .values(user)
      .returning()
      .then((result) => result[0] || null);
  } catch (err: any) {
    logger.error(`Erreur lors de l'ajout d'un utilisateur: ${err.message}`);
    throw new Error("Impossible d'ajouter l'utilisateur");
  }
};

export const updateUser = async (
  id: string,
  userData: Partial<User>
): Promise<User | null> => {
  try {
    const updatedUser = await db
      .update(users)
      .set(userData)
      .where(eq(users.id, id))
      .returning()
      .then((result) => result[0] || null);
    return updatedUser;
  } catch (err: any) {
    logger.error(
      `Erreur lors de la mise à jour de l'utilisateur: ${err.message}`
    );
    return null;
  }
};

export const findByCredentials = async (email: string) => {
  try {
    return await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, email),
      columns: {
        id: true,
        password: true,
      },
    });
  } catch (err: any) {
    logger.error(`Erreur lors de la recherche par email: ${err.message}`);
    return null;
  }
};
