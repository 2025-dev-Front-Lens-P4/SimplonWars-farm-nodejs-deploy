/**
 * =====================================================
 * TESTS AUTOMATISÉS - ANIMAL FARM NODE.JS
 * =====================================================
 * 
 * 🧪 QU'EST-CE QUE CE FICHIER ?
 * ------------------------------
 * Ce fichier contient tous les tests automatisés pour vérifier que notre application
 * fonctionne correctement. Les tests s'exécutent automatiquement et nous alertent
 * si quelque chose ne marche pas.
 * 
 * 🎯 POURQUOI DES TESTS ?
 * ------------------------
 * - Vérifier que l'application fonctionne comme prévu
 * - Détecter les bugs rapidement
 * - Permettre de modifier le code en toute confiance
 * - Documenter le comportement attendu de l'application
 * 
 * 🛠️ OUTILS UTILISÉS
 * -------------------
 * - Mocha : Framework de tests pour Node.js
 * - Supertest : Bibliothèque pour tester les APIs HTTP
 * - nyc : Outil de couverture de code (pour voir quelles parties du code sont testées)
 * 
 * @author Dev FRONT LENS P4 Team
 * @version 1.0.0
 */

// ========================================
// IMPORTS ET CONFIGURATION DES TESTS
// ========================================

// Importer l'application Express (le fichier app.js)
// require('../app.js') : Remonte d'un niveau depuis le dossier 'test'
// Cela nous permet d'accéder à notre application pour la tester
const app = require('../app.js');

// Supertest : Bibliothèque pour tester les APIs HTTP
// Permet d'envoyer des requêtes HTTP à notre application et de vérifier les réponses
// request(app) : Crée un client de test connecté à notre application
// C'est comme un navigateur web qui peut tester notre API automatiquement
const request = require('supertest')(app);

// ========================================
// SUITE DE TESTS PRINCIPALE
// ========================================

// describe() : Groupe de tests (comme un dossier)
// 'GET' : Nom du groupe de tests (on teste les requêtes GET)
// function() : Fonction qui contient tous les tests du groupe
describe('GET', function(){
  
  // ========================================
  // TEST 1 : PAGE D'ACCUEIL (ROUTE '/')
  // ========================================
  
  // it() : Test individuel
  // 'respond with text/html' : Description du test (ce qu'on teste)
  // function(done) : Fonction de test (done = callback pour signaler la fin du test)
  it('respond with text/html', function(done){
    // request : Client de test Supertest
    request
      .get('/')                    // Envoyer une requête GET vers '/' (page d'accueil)
      .set('Accept', 'text/html')  // Définir l'en-tête Accept pour demander du HTML
      .expect('Content-Type', /html/)  // Vérifier que la réponse contient 'html'
      .expect(200, done);          // Vérifier que le code de statut est 200 (OK)
  })

  // Test du contenu de la page d'accueil
  // On vérifie que la page contient bien le texte "George Orwell had a farm"
  it('respond with George Orwell', function(done){
    request
      .get('/')                    // Requête GET vers '/' (page d'accueil)
      .set('Accept', 'text/html')  // Demander du HTML
      .expect(200, /George Orwell had a farm/ig, done);  // Vérifier que le texte contient "George Orwell"
      // /George Orwell had a farm/ig : Expression régulière (regex)
      // i = insensible à la casse (majuscules/minuscules), g = recherche globale
  })

  // ========================================
  // TEST 2 : API (ROUTE '/api')
  // ========================================
  
  // Test du type de contenu de l'API
  // On vérifie que l'API retourne bien du JSON
  it('/api responds with json', function(done){
    request
      .get('/api')                           // Requête GET vers '/api' (endpoint API)
      .set('Accept', 'application/json')     // Demander du JSON
      .expect('Content-Type', /json/)        // Vérifier que la réponse est du JSON
      .expect(200, done);                    // Vérifier le code 200 (succès)
  })

  // Test du contenu exact de l'API
  // On vérifie que l'API retourne exactement tous les animaux Star Wars
  it('/api responds with Star Wars animals object', function(done){
    request
      .get('/api')                           // Requête GET vers '/api'
      .set('Accept', 'application/json')     // Demander du JSON
      .expect(200, {                         // Vérifier le code 200 ET le contenu exact
        "bantha": "grumph",      // Animal de Tatooine (comme un chameau)
        "tauntaun": "rawrr",     // Animal de Hoth (comme un cheval)
        "nerf": "bleat",         // Animal de Naboo (comme une chèvre)
        "eopie": "snort",        // Animal de Tatooine (comme un âne)
        "blurrg": "grunt",       // Animal de Malastare (comme un cochon)
        "porg": "chirp",         // Animal d'Ahch-To (comme un oiseau)
        "fathier": "whinny",     // Animal de Canto Bight (comme un cheval)
        "taq": "squawk",         // Animal d'Endor (comme un perroquet)
        "reek": "bellow",        // Animal de Geonosis (comme un taureau)
        "dewback": "croak",      // Animal de Tatooine (comme un lézard)
        "nunas": "cluck",        // Animal de Naboo (comme une poule)
        "varactyl": "screech",   // Animal d'Utapau (comme un dinosaure)
        "happabore": "snuffle"   // Animal de Naboo (comme un sanglier)
      }, done);
  })

  // ========================================
  // TEST 3 : PAGE STAR WARS (ROUTE '/starwars')
  // ========================================
  
  // Test de la page d'animation Star Wars
  // On vérifie que la page Star Wars retourne bien du HTML
  it('/starwars responds with text/html', function(done){
    request
      .get('/starwars')                      // Requête GET vers '/starwars'
      .set('Accept', 'text/html')            // Demander du HTML
      .expect('Content-Type', /html/)        // Vérifier que c'est du HTML
      .expect(200, done);                    // Vérifier le code 200
  })

  // Test du contenu de la page Star Wars
  // On vérifie que la page contient bien l'élément CSS 'star-wars-intro'
  it('/starwars contains Star Wars intro content', function(done){
    request
      .get('/starwars')                      // Requête GET vers '/starwars'
      .set('Accept', 'text/html')            // Demander du HTML
      .expect(200, /star-wars-intro/ig, done);  // Vérifier que le HTML contient 'star-wars-intro'
  })

  // Test de la présence du nom de l'équipe
  // On vérifie que la page contient bien "Dev FRONT LENS P4"
  it('/starwars contains Dev FRONT LENS P4', function(done){
    request
      .get('/starwars')                      // Requête GET vers '/starwars'
      .set('Accept', 'text/html')            // Demander du HTML
      .expect(200, /Dev FRONT LENS P4/ig, done);  // Vérifier que le texte contient le nom de l'équipe
  })

  // Test avancé : vérification d'un animal Star Wars aléatoire
  // On vérifie que la page d'accueil contient bien un animal Star Wars
  it('random animal from / contains Star Wars animal', function(done){
    request
      .get('/')                              // Requête GET vers '/' (page d'accueil)
      .set('Accept', 'text/html')            // Demander du HTML
      .expect(200)                           // Vérifier le code 200
      .end(function(err, res) {              // .end() : Gérer la réponse manuellement
        if (err) return done(err);           // Si erreur, arrêter le test
        
        // Liste de tous les animaux Star Wars possibles
        const starWarsAnimals = ['bantha', 'tauntaun', 'nerf', 'eopie', 'blurrg', 'porg', 'fathier', 'taq', 'reek', 'dewback', 'nunas', 'varactyl', 'happabore'];
        
        // Vérifier si au moins un animal Star Wars est présent dans la réponse
        // .some() : Retourne true si au moins un élément correspond à la condition
        const hasStarWarsAnimal = starWarsAnimals.some(animal => res.text.includes(animal));
        
        if (hasStarWarsAnimal) {
          done();                            // Test réussi : un animal Star Wars a été trouvé
        } else {
          // Test échoué : aucun animal Star Wars trouvé
          done(new Error('No Star Wars animal found in response'));
        }
      });
  })

  // ========================================
  // TEST 4 : DOCUMENTATION SWAGGER (ROUTE '/api-docs')
  // ========================================
  
  // Test de la documentation Swagger
  // On vérifie que la documentation interactive fonctionne
  it('/api-docs responds with html (Swagger UI)', function(done){
    request
      .get('/api-docs')                      // Requête GET vers '/api-docs'
      .set('Accept', 'text/html')            // Demander du HTML
      .expect('Content-Type', /html/)        // Vérifier que c'est du HTML
      .expect(200, done);                    // Vérifier le code 200
  })

  // ========================================
  // TEST 5 : API ANIMAL ALÉATOIRE (ROUTE '/api/random')
  // ========================================
  
  // Test de l'endpoint d'animal aléatoire
  // On vérifie que l'API retourne un animal avec tous les champs requis
  it('/api/random responds with json and contains animal, sound, and planet', function(done){
    request
      .get('/api/random')                    // Requête GET vers '/api/random'
      .set('Accept', 'application/json')     // Demander du JSON
      .expect('Content-Type', /json/)        // Vérifier que c'est du JSON
      .expect(200)                           // Vérifier le code 200
      .end(function(err, res) {              // .end() : Gérer la réponse manuellement
        if (err) return done(err);           // Si erreur, arrêter le test
        
        // Vérifier que la réponse contient les champs requis
        // res.body : Contenu JSON de la réponse
        if (res.body.animal && res.body.sound && res.body.planet) {
          done();                            // Test réussi : tous les champs sont présents
        } else {
          // Test échoué : manque des champs requis
          done(new Error('Missing required fields in random animal response'));
        }
      });
  })

  // ========================================
  // TEST 6 : API ANIMAUX MULTIPLES (ROUTE '/api/random/{count}')
  // ========================================
  
  // Test avec 5 animaux demandés
  // On vérifie que l'API retourne exactement 5 animaux
  it('/api/random/5 responds with array of 5 animals', function(done){
    request
      .get('/api/random/5')                  // Requête GET vers '/api/random/5'
      .set('Accept', 'application/json')     // Demander du JSON
      .expect('Content-Type', /json/)        // Vérifier que c'est du JSON
      .expect(200)                           // Vérifier le code 200
      .end(function(err, res) {
        if (err) return done(err);
        
        // Vérifier que la réponse est un tableau avec exactement 5 éléments
        if (Array.isArray(res.body) && res.body.length === 5) {
          done();                            // Test réussi
        } else {
          done(new Error('Expected array of 5 animals'));
        }
      });
  })

  // Test de la limite maximale (10 animaux)
  // On vérifie que l'API respecte la limite de 10 animaux maximum
  it('/api/random/15 responds with array of 10 animals (max limit)', function(done){
    request
      .get('/api/random/15')                 // Requête GET vers '/api/random/15' (plus que la limite)
      .set('Accept', 'application/json')     // Demander du JSON
      .expect('Content-Type', /json/)        // Vérifier que c'est du JSON
      .expect(200)                           // Vérifier le code 200
      .end(function(err, res) {
        if (err) return done(err);
        
        // Vérifier que la réponse est limitée à 10 animaux maximum
        if (Array.isArray(res.body) && res.body.length === 10) {
          done();                            // Test réussi : limite respectée
        } else {
          done(new Error('Expected array of 10 animals (max limit)'));
        }
      });
  })

  // ========================================
  // TEST 7 : API ANIMAUX PAR PLANÈTE (ROUTE '/api/planet/{planetName}')
  // ========================================
  
  // Test avec une planète existante (Tatooine)
  // On vérifie que l'API retourne les animaux de Tatooine
  it('/api/planet/Tatooine responds with Tatooine animals', function(done){
    request
      .get('/api/planet/Tatooine')           // Requête GET vers '/api/planet/Tatooine'
      .set('Accept', 'application/json')     // Demander du JSON
      .expect('Content-Type', /json/)        // Vérifier que c'est du JSON
      .expect(200)                           // Vérifier le code 200
      .end(function(err, res) {
        if (err) return done(err);
        
        // Vérifier que la réponse contient la planète et les animaux
        if (res.body.planet === 'Tatooine' && res.body.animals) {
          done();                            // Test réussi
        } else {
          done(new Error('Expected Tatooine planet and animals'));
        }
      });
  })

  // Test avec une planète inexistante
  // On vérifie que l'API retourne une erreur 404 pour une planète inconnue
  it('/api/planet/UnknownPlanet responds with 404', function(done){
    request
      .get('/api/planet/UnknownPlanet')      // Requête GET vers une planète inexistante
      .set('Accept', 'application/json')     // Demander du JSON
      .expect('Content-Type', /json/)        // Vérifier que c'est du JSON
      .expect(404, done);                    // Vérifier le code 404 (non trouvé)
  })

  // ========================================
  // TEST 8 : API STATISTIQUES (ROUTE '/api/stats')
  // ========================================
  
  // Test des statistiques
  // On vérifie que l'API retourne toutes les statistiques requises
  it('/api/stats responds with statistics', function(done){
    request
      .get('/api/stats')                     // Requête GET vers '/api/stats'
      .set('Accept', 'application/json')     // Demander du JSON
      .expect('Content-Type', /json/)        // Vérifier que c'est du JSON
      .expect(200)                           // Vérifier le code 200
      .end(function(err, res) {
        if (err) return done(err);
        
        // Vérifier que tous les champs de statistiques sont présents
        if (res.body.totalAnimals && res.body.totalPlanets && res.body.animalsPerPlanet) {
          done();                            // Test réussi
        } else {
          done(new Error('Missing required statistics fields'));
        }
      });
  })

  // ========================================
  // TEST 9 : API RECHERCHE (ROUTE '/api/search/{query}')
  // ========================================
  
  // Test de recherche avec "ban" (devrait trouver "bantha")
  // On vérifie que l'API trouve bien l'animal correspondant
  it('/api/search/ban responds with bantha', function(done){
    request
      .get('/api/search/ban')                // Requête GET vers '/api/search/ban'
      .set('Accept', 'application/json')     // Demander du JSON
      .expect('Content-Type', /json/)        // Vérifier que c'est du JSON
      .expect(200)                           // Vérifier le code 200
      .end(function(err, res) {
        if (err) return done(err);
        
        // Vérifier que la recherche a trouvé des résultats
        if (res.body.query === 'ban' && res.body.results && Object.keys(res.body.results).length > 0) {
          done();                            // Test réussi
        } else {
          done(new Error('Expected search results for "ban"'));
        }
      });
  })

  // Test de recherche avec un terme inexistant
  // On vérifie que l'API retourne une erreur 404 pour une recherche sans résultat
  it('/api/search/xyz responds with 404', function(done){
    request
      .get('/api/search/xyz')                // Requête GET vers '/api/search/xyz' (terme inexistant)
      .set('Accept', 'application/json')     // Demander du JSON
      .expect('Content-Type', /json/)        // Vérifier que c'est du JSON
      .expect(404, done);                    // Vérifier le code 404 (non trouvé)
  })
})
