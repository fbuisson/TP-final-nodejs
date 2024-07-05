# TP-final-nodejs

## Description

Ce projet est une application Node.js qui permet de gérer des auteurs, des livres, des événements et des genres. Il utilise Express pour gérer les routes et fournit une API RESTful pour interagir avec les données stockées dans des fichiers JSON.

# Installation du projet en local

## Prérequis

- Node.js installé sur votre machine
- npm (Node Package Manager)

## Installation

1. Cloner le dépôt sur votre machine

   ```bash
   git clone https://github.com/fbuisson/TP-final-nodejs.git
   cd TP-final-nodejs
   ```

2. Installer les dépendances

   ```bash
   npm install
   ```

## Lancer le projet

Pour lancer le projet, démarrer le serveur avec la commande suivante :

```bash
npm start
```

## Consulter les différentes vues du projet

Ce projet présente une liste de livres consultables en local.

Accès aux différentes listes:

- Liste des livres:
  http://localhost:3000/views/books

- Liste des genres associés:
  http://localhost:3000/views/genres

- Détails des auteurs:
  http://localhost:3000/views/authors

- Dates de dédicaces des auteurs en librairie:
  http://localhost:3000/views/events

## Structure du projet

- controllers : Contient les fichiers de contrôleur pour gérer la logique des différentes entités.
- data : Contient les fichiers JSON où les données sont stockées.
- models : Contient les fichiers de modèle pour interagir avec les fichiers JSON.
- routes : Contient les fichiers de route pour définir les différentes routes de l'application.
- utils : Contient les utilitaires, comme la fonction de réponse API.
