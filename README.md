# 🚀 SimplonWars Farm Node.js - Ferme d'Animaux Star Wars

Une application Express.js écrite en Node.js avec une animation d'intro Star Wars.

## 🎯 Qu'est-ce que ce projet ?

Ce projet est une **ferme d'animaux Star Wars** qui permet de :

- Générer des sons d'animaux aléatoires de l'univers Star Wars
- Consulter une API REST pour récupérer les données des animaux
- Voir une animation d'intro style Star Wars

C'est un projet pédagogique pour apprendre :

- **Node.js** (serveur JavaScript)
- **Express.js** (framework web)
- **API REST** (communication entre applications)
- **Docker** (conteneurisation)
- **CI/CD** (Intégration et Déploiement Continus)

## 📋 Prérequis

* Node.js (version 14 ou supérieure)
* npm (gestionnaire de paquets Node.js)

### 🔧 Installation des modules

Exécutez `npm` pour installer les modules Node.js requis.

```shell
npm install
```

## 🚀 Lancement

Vous pouvez lancer l'application de plusieurs façons. La première est de démarrer l'application via `npm` :

```shell
npm start
```

Ou vous pouvez l'exécuter directement via `node` :

```shell
node app.js
```

## 🌐 Routes disponibles

### 🏠 Pages Web

- `GET /` - Retourne un animal Star Wars aléatoire avec son son au format HTML
- `GET /starwars` - Affiche l'animation d'intro Star Wars
- `GET /api-docs` - Documentation interactive de l'API (Swagger UI)

### 🔌 API REST

- `GET /api` - Retourne tous les animaux et leurs sons au format JSON
- `GET /api/random` - Retourne un animal aléatoire avec son son et sa planète
- `GET /api/random/{count}` - Retourne plusieurs animaux aléatoires (1-10)
- `GET /api/planet/{planetName}` - Retourne tous les animaux d'une planète spécifique
- `GET /api/stats` - Retourne des statistiques sur les animaux et planètes
- `GET /api/search/{query}` - Recherche d'animaux par nom (recherche partielle)

## ✨ Fonctionnalités

### 🐾 Ferme d'Animaux Star Wars

- Génération aléatoire de sons d'animaux
- API REST complète pour récupérer les données
- Animaux de l'univers Star Wars (bantha, tauntaun, nerf, etc.)
- Recherche et filtrage par planète
- Statistiques détaillées

### 🌟 Intro Star Wars

- Séquence d'intro animée style Star Wars
- Design responsive pour les appareils mobiles
- Animations CSS avec keyframes
- Typographie et style personnalisés

### 📚 Documentation API

- Interface Swagger interactive
- Documentation complète de tous les endpoints
- Tests d'API intégrés
- Exemples de requêtes et réponses

## 📁 Structure des fichiers

```
SimplonWars-farm-nodejs/
├── app.js                 # Fichier principal de l'application
├── package.json           # Dépendances et scripts
├── Dockerfile             # Configuration Docker
├── .dockerignore          # Fichier d'exclusion Docker
├── .gitignore             # Fichier d'exclusion Git
├── README.md              # Ce fichier
├── public/                # Fichiers statiques
│   ├── index.html         # HTML de l'intro Star Wars
│   ├── css/
│   │   └── style.css      # Styles de l'intro Star Wars
│   └── fonts/             # Dossier des polices
├── test/                  # Fichiers de tests
│   └── test.js            # Suite de tests
└── .github/               # Configuration GitHub
    └── workflows/         # Pipelines GitHub Actions
        ├── test.yml       # Pipeline de tests
        └── docker.yml     # Pipeline Docker
```

## 🧪 Tests

Vous pouvez également exécuter les tests via `npm` :

```shell
npm test
```

## 🐳 Docker

Pour construire et exécuter l'application avec Docker :

```shell
# Construire l'image Docker
docker build -t simplonwars-farm-nodejs .

# Exécuter le conteneur
docker run -p 8080:8080 simplonwars-farm-nodejs
```

## 🔄 CI/CD

Ce projet utilise GitHub Actions pour :

- **Tests automatiques** : Vérification automatique du code à chaque push
- **Build Docker** : Construction automatique d'images Docker
- **Déploiement** : Publication automatique sur Docker Hub et GitHub Container Registry
- **Documentation API** : Génération automatique de la documentation Swagger

## 🎓 Apprentissage

Ce projet est conçu pour apprendre les concepts modernes de développement web :

- **Backend** : Node.js, Express.js, API REST
- **Documentation** : Swagger, OpenAPI, documentation interactive
- **DevOps** : Docker, CI/CD, GitHub Actions
- **Bonnes pratiques** : Tests automatisés, documentation, structure de projet

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

- Signaler des bugs
- Proposer des améliorations
- Ajouter de nouveaux animaux Star Wars
- Améliorer la documentation

## 📄 Licence

Ce projet est sous licence MIT.
