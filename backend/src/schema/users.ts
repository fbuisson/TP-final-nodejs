import mongoose, { Schema } from "mongoose";
import { IUser } from "../types/IUser";

// Définition du schéma mongoose pour l'entité User
// définit la structure des données + options de validations
const userSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
});

// Création du modèle User basé sur le schéma userSchema
// model utilisé pour CRUD les documents de la collection 'users' de mongodb
export default mongoose.model<IUser>("User", userSchema);
