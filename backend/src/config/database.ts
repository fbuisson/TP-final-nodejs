import { connect } from "mongoose";
import { env } from "./env";

const { MONGO_URI } = env;

console.log("### L'URL :", MONGO_URI);

export const connectDB = async () => {
  try {
    const c = await connect(MONGO_URI);
    console.log(`MongoDB connected: ${c.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // pour quitter l'app avec un code d'erreur (1 => erreur, 0 => succès)
  }
};
