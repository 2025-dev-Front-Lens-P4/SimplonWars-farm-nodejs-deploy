/**
 * =====================================================
 * ANIMAL FARM NODE.JS - APPLICATION STAR WARS
 * =====================================================
 * 
 * 🚀 QU'EST-CE QUE CETTE APPLICATION ?
 * -------------------------------------
 * Cette application web utilise Node.js et Express.js pour créer :
 * - Une ferme d'animaux Star Wars avec des sons aléatoires
 * - Une API REST pour récupérer les données des animaux
 * - Une page d'intro animée style Star Wars
 * - Une documentation interactive avec Swagger
 * 
 * 🎯 POURQUOI CETTE APPLICATION ?
 * --------------------------------
 * C'est un projet pédagogique pour apprendre :
 * - Node.js (serveur JavaScript)
 * - Express.js (framework web)
 * - API REST (communication entre applications)
 * - Swagger (documentation d'API)
 * - Docker (conteneurisation)
 * - CI/CD (Intégration et Déploiement Continus)
 * 
 * @author Dev FRONT LENS P4 Team
 * @version 1.0.0
 */

// 📦 IMPORTS - BIBLIOTHÈQUES NÉCESSAIRES
// ----------------------------------------
// On importe les "outils" dont on a besoin pour faire fonctionner l'application
const express = require('express');        // Framework web pour créer des serveurs
const _ = require('underscore');           // Bibliothèque d'utilitaires JavaScript
const path = require('path');              // Outils pour manipuler les chemins de fichiers
const swaggerUi = require('swagger-ui-express');  // Interface Swagger
const swaggerJsdoc = require('swagger-jsdoc');    // Génération de la documentation Swagger

// ⚙️ CONFIGURATION - PARAMÈTRES DE L'APPLICATION
// ----------------------------------------------
// Le port sur lequel notre serveur va écouter
// Si la variable d'environnement PORT existe, on l'utilise, sinon on utilise 8080
const port = process.env.PORT || 8082;

// 🐾 BASE DE DONNÉES DES ANIMAUX STAR WARS
// -----------------------------------------
// Chaque animal a un son caractéristique de l'univers Star Wars
// C'est comme un dictionnaire : clé = nom de l'animal, valeur = son
const animals = {
    "bantha": "grumph",        // Bêtes poilues géantes de Tatooine
    "tauntaun": "rawrr",       // Lézards des neiges de Hoth
    "nerf": "bleat",           // Bétail domestiqué
    "eopie": "snort",          // Bêtes de somme du désert
    "blurrg": "grunt",         // Montures reptiliennes
    "porg": "chirp",           // Petites créatures ressemblant à des oiseaux
    "fathier": "whinny",       // Animaux de course de Canto Bight
    "taq": "squawk",           // Créatures ressemblant à des oiseaux
    "reek": "bellow",          // Bêtes grandes et agressives
    "dewback": "croak",        // Reptiles du désert
    "nunas": "cluck",          // Créatures ressemblant à de la volaille
    "varactyl": "screech",     // Reptiles volants
    "happabore": "snuffle"     // Créatures ressemblant à des cochons
}

// 🌟 PLANÈTES STAR WARS
// ----------------------
// Planètes où vivent les différents animaux
const planets = {
    "bantha": "Tatooine",
    "tauntaun": "Hoth", 
    "nerf": "Naboo",
    "eopie": "Tatooine",
    "blurrg": "Malastare",
    "porg": "Ahch-To",
    "fathier": "Canto Bight",
    "taq": "Endor",
    "reek": "Geonosis",
    "dewback": "Tatooine",
    "nunas": "Naboo",
    "varactyl": "Utapau",
    "happabore": "Naboo"
}

/**
 * 🎲 FONCTION : GÉNÉRER UN ANIMAL ALÉATOIRE
 * ------------------------------------------
 * Cette fonction choisit un animal au hasard dans notre liste
 * et retourne son nom et son son.
 * 
 * @returns {Array} Tableau contenant [nom_animal, son_animal]
 * 
 * Exemple : ["bantha", "grumph"]
 */
function getAnimal() {
  return _.sample(Object.entries(animals));
}

/**
 * 🎲 FONCTION : GÉNÉRER PLUSIEURS ANIMAUX ALÉATOIRES
 * --------------------------------------------------
 * Cette fonction retourne plusieurs animaux aléatoires
 * 
 * @param {number} count - Nombre d'animaux à générer
 * @returns {Array} Tableau d'animaux aléatoires
 */
function getMultipleAnimals(count = 3) {
  const animalEntries = Object.entries(animals);
  const shuffled = _.shuffle(animalEntries);
  return shuffled.slice(0, Math.min(count, animalEntries.length));
}

// 🚀 CRÉATION DE L'APPLICATION EXPRESS
// ------------------------------------
// On crée notre application web avec Express
const app = express();

// 📁 CONFIGURATION DES FICHIERS STATIQUES
// ---------------------------------------
// On dit à Express de servir les fichiers du dossier 'public'
// Cela permet d'accéder aux fichiers HTML, CSS, images, etc.
// C'est comme créer un dossier "public" sur un serveur web
// NOTE: On ne sert pas index.html automatiquement pour éviter les conflits avec la route principale
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/fonts', express.static(path.join(__dirname, 'public/fonts')));
app.use('/assets', express.static(path.join(__dirname, 'public/assets'))); // Ajout pour servir les sons

// 📚 CONFIGURATION SWAGGER
// -------------------------
// Configuration pour générer la documentation de l'API
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Animal Farm Star Wars API',
      version: '1.0.0',
      description: 'API pour la ferme d\'animaux Star Wars - Projet pédagogique Dev FRONT LENS P4',
      contact: {
        name: 'Dev FRONT LENS P4 Team',
        url: 'https://github.com/your-repo'
      }
    },
    servers: [
      {
        url: 'http://localhost:8080',
        description: 'Serveur de développement'
      }
    ]
  },
  apis: ['./app.js'] // Fichiers contenant les annotations Swagger
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// 🔌 ROUTE SWAGGER - DOCUMENTATION INTERACTIVE
// --------------------------------------------
// Interface web pour explorer et tester l'API
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * 🏠 ROUTE PRINCIPALE - PAGE D'ACCUEIL
 * ------------------------------------
 * Quand quelqu'un visite http://localhost:8080/
 * On affiche l'animation Star Wars (même contenu que /starwars)
 */
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/**
 * 🌟 ROUTE STAR WARS - PAGE D'INTRO ANIMÉE
 * -----------------------------------------
 * Quand quelqu'un visite http://localhost:8080/starwars
 * On affiche l'intro animée style Star Wars avec le thème Dev FRONT LENS P4
 */
app.get('/starwars', function(req, res){
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/**
 * 🔌 ROUTE API - DONNÉES JSON
 * ----------------------------
 * Quand quelqu'un visite http://localhost:8080/api
 * On retourne tous les animaux et leurs sons au format JSON
 * 
 * Utile pour :
 * - Créer des applications mobiles
 * - Intégrer avec d'autres services
 * - Récupérer les données programmatiquement
 * 
 * @swagger
 * /api:
 *   get:
 *     summary: Récupérer tous les animaux Star Wars
 *     description: Retourne la liste complète des animaux et leurs sons
 *     responses:
 *       200:
 *         description: Liste des animaux récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 bantha: "grumph"
 *                 tauntaun: "rawrr"
 *                 nerf: "bleat"
 */
app.get('/api', function(req, res){
  res.writeHead(200, { 'Content-Type': 'application/json' });  // On dit que c'est du JSON
  res.write(JSON.stringify(animals));  // On convertit notre objet en JSON
  res.end();
})

/**
 * 🎲 ROUTE API - ANIMAL ALÉATOIRE
 * --------------------------------
 * Retourne un animal aléatoire avec son son et sa planète
 * 
 * @swagger
 * /api/random:
 *   get:
 *     summary: Récupérer un animal Star Wars aléatoire
 *     description: Retourne un animal choisi au hasard avec ses informations
 *     responses:
 *       200:
 *         description: Animal aléatoire récupéré avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 animal:
 *                   type: string
 *                   example: "bantha"
 *                 sound:
 *                   type: string
 *                   example: "grumph"
 *                 planet:
 *                   type: string
 *                   example: "Tatooine"
 */
app.get('/api/random', function(req, res){
  const [animal_name, sound] = getAnimal();
  const planet = planets[animal_name] || "Inconnue";
  
  const response = {
    animal: animal_name,
    sound: sound,
    planet: planet
  };
  
  res.json(response);
});

/**
 * 🎲 ROUTE API - PLUSIEURS ANIMAUX ALÉATOIRES
 * --------------------------------------------
 * Retourne plusieurs animaux aléatoires
 * 
 * @swagger
 * /api/random/{count}:
 *   get:
 *     summary: Récupérer plusieurs animaux Star Wars aléatoires
 *     description: Retourne un nombre spécifié d'animaux choisis au hasard
 *     parameters:
 *       - in: path
 *         name: count
 *         required: false
 *         schema:
 *           type: integer
 *           default: 3
 *           minimum: 1
 *           maximum: 10
 *         description: Nombre d'animaux à récupérer (1-10)
 *     responses:
 *       200:
 *         description: Animaux aléatoires récupérés avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   animal:
 *                     type: string
 *                   sound:
 *                     type: string
 *                   planet:
 *                     type: string
 */
app.get('/api/random/:count', function(req, res){
  const count = parseInt(req.params.count) || 3;
  const limitedCount = Math.min(Math.max(count, 1), 10); // Limite entre 1 et 10
  
  const randomAnimals = getMultipleAnimals(limitedCount).map(([animal, sound]) => ({
    animal: animal,
    sound: sound,
    planet: planets[animal] || "Inconnue"
  }));
  
  res.json(randomAnimals);
});

/**
 * 🌍 ROUTE API - ANIMAUX PAR PLANÈTE
 * ------------------------------------
 * Retourne tous les animaux d'une planète spécifique
 * 
 * @swagger
 * /api/planet/{planetName}:
 *   get:
 *     summary: Récupérer les animaux d'une planète spécifique
 *     description: Retourne tous les animaux qui vivent sur une planète donnée
 *     parameters:
 *       - in: path
 *         name: planetName
 *         required: true
 *         schema:
 *           type: string
 *         description: Nom de la planète
 *     responses:
 *       200:
 *         description: Animaux de la planète récupérés avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 planet:
 *                   type: string
 *                 animals:
 *                   type: array
 *                   items:
 *                     type: object
 *       404:
 *         description: Planète non trouvée
 */
app.get('/api/planet/:planetName', function(req, res){
  const planetName = req.params.planetName;
  const planetAnimals = {};
  
  // Trouver tous les animaux de cette planète
  Object.entries(planets).forEach(([animal, planet]) => {
    if (planet.toLowerCase() === planetName.toLowerCase()) {
      planetAnimals[animal] = animals[animal];
    }
  });
  
  if (Object.keys(planetAnimals).length === 0) {
    res.status(404).json({
      error: "Planète non trouvée",
      message: `Aucun animal trouvé sur la planète ${planetName}`
    });
  } else {
    res.json({
      planet: planetName,
      animals: planetAnimals
    });
  }
});

/**
 * 📊 ROUTE API - STATISTIQUES
 * ----------------------------
 * Retourne des statistiques sur les animaux et planètes
 * 
 * @swagger
 * /api/stats:
 *   get:
 *     summary: Récupérer les statistiques de l'API
 *     description: Retourne des statistiques sur les animaux et planètes
 *     responses:
 *       200:
 *         description: Statistiques récupérées avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalAnimals:
 *                   type: integer
 *                 totalPlanets:
 *                   type: integer
 *                 animalsPerPlanet:
 *                   type: object
 */
app.get('/api/stats', function(req, res){
  const totalAnimals = Object.keys(animals).length;
  const uniquePlanets = [...new Set(Object.values(planets))];
  const totalPlanets = uniquePlanets.length;
  
  // Compter les animaux par planète
  const animalsPerPlanet = {};
  Object.values(planets).forEach(planet => {
    animalsPerPlanet[planet] = (animalsPerPlanet[planet] || 0) + 1;
  });
  
  res.json({
    totalAnimals: totalAnimals,
    totalPlanets: totalPlanets,
    animalsPerPlanet: animalsPerPlanet,
    planets: uniquePlanets
  });
});

/**
 * 🔍 ROUTE API - RECHERCHE D'ANIMAL
 * ----------------------------------
 * Recherche un animal par nom (recherche partielle)
 * 
 * @swagger
 * /api/search/{query}:
 *   get:
 *     summary: Rechercher un animal par nom
 *     description: Recherche partielle dans les noms d'animaux
 *     parameters:
 *       - in: path
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Terme de recherche
 *     responses:
 *       200:
 *         description: Résultats de recherche
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 query:
 *                   type: string
 *                 results:
 *                   type: array
 *       404:
 *         description: Aucun animal trouvé
 */
app.get('/api/search/:query', function(req, res){
  const query = req.params.query.toLowerCase();
  const results = {};
  
  Object.entries(animals).forEach(([animal, sound]) => {
    if (animal.toLowerCase().includes(query)) {
      results[animal] = {
        sound: sound,
        planet: planets[animal] || "Inconnue"
      };
    }
  });
  
  if (Object.keys(results).length === 0) {
    res.status(404).json({
      error: "Aucun animal trouvé",
      message: `Aucun animal ne correspond à la recherche '${query}'`
    });
  } else {
    res.json({
      query: query,
      results: results
    });
  }
});

// 🎬 DÉMARRAGE DU SERVEUR
// ------------------------
// On lance notre serveur et on l'écoute sur le port défini
// Quand le serveur démarre, on affiche un message de confirmation
module.exports =  app.listen(port, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${ port }`)
  console.log(`📚 Documentation API disponible sur http://localhost:${ port }/api-docs`)
});
