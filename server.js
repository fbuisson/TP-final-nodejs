import express from "express";
import path from "path";

// J'instancie/j'initialise mon serveur express (dans la variable app)
const app = express();

// Je définis mon port (3000)
const PORT = 3000;

// Utilisation du middleware express.json() pour analyser les requêtes JSON
app.use(express.json()); // le payload (le body) de la req sera accessible dans toutes mes routes depuis req.body
app.use(express.urlencoded({ extended: true })); // lire le body lorsque le payload sera de type form-data-urlencoded (formulaire)

app.set("view engine", "ejs"); // Configurer Express pour utiliser EJS comme moteur de vue (views)
app.set("views", path.join(process.cwd(), "views")); // Définir le répertoire où sont stockés les fichiers de vues (views)

// On écoute sur le port 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
