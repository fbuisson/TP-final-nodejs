"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_js_1 = __importDefault(require("./routes/index.js"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./config/database");
const env_1 = require("./config/env");
// Je définis mon port (3000)
const { PORT, ORIGIN } = env_1.env;
// J'instancie/j'initialise mon serveur express (dans la variable app)
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: ORIGIN, // Autoriser uniquement cette adresse à requeter sur le serveur
    methods: ["GET", "PUT", "POST", "DELETE", "PATCH"], // methodes http autorisées
    credentials: true, // Autoriser les cookies
}));
(0, database_1.connectDB)();
// Utilisation du middleware express.json() pour analyser les requêtes JSON
app.use(express_1.default.json()); // le payload (le body) de la req sera accessible dans toutes mes routes depuis req.body
app.use(express_1.default.urlencoded({ extended: true })); // lire le body lorsque le payload sera de type form-data-urlencoded (formulaire)
app.set("view engine", "ejs"); // Configurer Express pour utiliser EJS comme moteur de vue (views)
app.set("views", path_1.default.join(process.cwd(), "views")); // Définir le répertoire où sont stockés les fichiers de vues (views)
// J'utilise le router défini dans routes/index.js pour gérer les routes de mon application de façon globale
app.use(index_js_1.default);
// Definit une route pour les requêtes de la méthode GET sur l'url /
// [GET] http://localhost:3000/
app.get("/", (req, res) => {
    console.log("Arrivé au controller");
    res.status(200).send("Page d'accueil !");
});
// On écoute sur le port 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
