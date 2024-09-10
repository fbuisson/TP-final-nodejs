import express, { Request, Response } from "express";
import routes from "./routes/index";
import path from "path";
import cors from "cors";
import { connectDB } from "./config/database";
import { env } from "./config/env";

// Je définis mon port (3000)
const { PORT, ORIGIN } = env;

// J'instancie/j'initialise mon serveur express (dans la variable app)
const app = express();

app.use(
  cors({
    origin: ORIGIN, // Autoriser uniquement cette adresse à requeter sur le serveur
    methods: ["GET", "PUT", "POST", "DELETE", "PATCH"], // methodes http autorisées

    credentials: true, // Autoriser les cookies
  })
);
connectDB();
// Utilisation du middleware express.json() pour analyser les requêtes JSON
app.use(express.json()); // le payload (le body) de la req sera accessible dans toutes mes routes depuis req.body
app.use(express.urlencoded({ extended: true })); // lire le body lorsque le payload sera de type form-data-urlencoded (formulaire)

app.set("view engine", "ejs"); // Configurer Express pour utiliser EJS comme moteur de vue (views)
app.set("views", path.join(process.cwd(), "views")); // Définir le répertoire où sont stockés les fichiers de vues (views)

// J'utilise le router défini dans routes/index.js pour gérer les routes de mon application de façon globale
app.use(routes);

// Definit une route pour les requêtes de la méthode GET sur l'url /
// [GET] http://localhost:3000/
app.get("/", (req: Request, res: Response) => {
  console.log("Arrivé au controller");
  res.status(200).send("Page d'accueil !");
});

// On écoute sur le port 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
