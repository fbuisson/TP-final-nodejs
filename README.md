# TP-final-nodejs

<p align="center">
  <img src="https://img.freepik.com/vecteurs-libre/pile-design-plat-dessine-main-illustration-livres_23-2149341898.jpg?w=360" alt="Alt text" title="a title">
</p>

## Description

Ce projet est une application full-stack permettant de gérer des auteurs, des livres, des événements et des genres. L'API backend est construite avec **Node.js** et **Express**, et utilise **MongoDB** pour stocker les données. Le frontend utilise **React** avec **Tailwind CSS** pour l'interface utilisateur.


## Installation du projet en local

### Prérequis

- **Node.js** installé sur votre machine
- **npm** (Node Package Manager)
- Un accès à une base de données **MongoDB** (par exemple, via **MongoDB Atlas**)

### Étapes d'installation

**Cloner le dépôt sur votre machine**

   ```bash
   git clone https://github.com/fbuisson/TP-final-nodejs.git
   cd TP-final-nodejs
   ```

#### BACKEND

1. **Configurer l'API backend**


  Accédez au dossier backend pour installer les dépendances et configurer l'environnement.

   ```bash
   cd backend
   npm install
   ```

2. **Configurer l'environnement backend**

  Créez un fichier .env dans le dossier backend et ajoutez les informations de connexion à MongoDB. Voici un exemple de fichier .env :

  ```bash
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mydatabase?retryWrites=true&w=majority
   PORT=3000
  ```

3. **Compiler TypeScript et lancer le backend**

Compilez le projet TypeScript et lancez le serveur :

  ```bash
   tsc && npm start
  ```

#### FRONTEND

1. **Installer le frontend**

Accédez maintenant au dossier frontend pour installer les dépendances et démarrer l'application React :

  ```bash
   cd ../frontend
   npm install
  ```

2. **Lancer le frontend**

Démarrez le serveur de développement pour le frontend :

  ```bash
  npm run dev
  ```

## Structure du projet
- backend : Contient le code source de l'API Express et les modèles pour MongoDB :
-- controllers : Contient la logique métier pour les entités (livres, auteurs, événements, genres).
-- models : Contient les modèles Mongoose pour interagir avec MongoDB.
-- routes : Contient les routes pour gérer les requêtes API.
-- utils : Contient des utilitaires comme la fonction de réponse API.
- frontend : Contient le code source du frontend développé en React avec Tailwind CSS.

## Accéder à l'application

Backend (API) : L'API tourne sur http://localhost:3000
Frontend : L'application frontend est accessible sur le port où tourne le serveur de développement (par exemple, http://localhost:5173)