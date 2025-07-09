# =====================================================
# DOCKERFILE - FICHIER DE CONFIGURATION DOCKER
# =====================================================
# 
# Qu'est-ce qu'un Dockerfile ?
# Un Dockerfile est comme une "recette de cuisine" qui explique à Docker
# comment construire une image (comme une photo) de votre application.
# Cette image peut ensuite être exécutée sur n'importe quel ordinateur
# qui a Docker installé, garantissant que l'application fonctionne
# toujours de la même manière.

# ÉTAPE 1 : CHOISIR L'IMAGE DE BASE
# ---------------------------------
# On commence par choisir une "image de base" qui contient déjà
# Node.js version 14. C'est comme partir d'un ordinateur qui a déjà
# Node.js installé, au lieu de partir de zéro.
FROM node:14

# ÉTAPE 2 : CRÉER ET DÉFINIR LE DOSSIER DE TRAVAIL
# ------------------------------------------------
# On crée un dossier dans le conteneur où notre application va vivre.
# C'est comme créer un nouveau bureau sur votre ordinateur.
WORKDIR /usr/src/app

# ÉTAPE 3 : COPIER LES FICHIERS DE DÉPENDANCES
# --------------------------------------------
# On copie d'abord seulement les fichiers qui listent nos dépendances
# (package.json et package-lock.json). C'est une astuce pour optimiser :
# si ces fichiers ne changent pas, Docker peut réutiliser le cache
# des dépendances déjà installées.
COPY package*.json ./

# ÉTAPE 4 : INSTALLER LES DÉPENDANCES
# -----------------------------------
# On installe toutes les bibliothèques dont notre application a besoin
# (comme Express.js, Underscore, etc.). C'est comme installer des
# applications sur votre téléphone.
RUN npm install

# ÉTAPE 5 : COPIER TOUT LE CODE DE L'APPLICATION
# ----------------------------------------------
# Maintenant on copie tout le reste du code (fichiers HTML, CSS, JS, etc.)
# dans le conteneur. C'est comme copier tous vos documents dans un dossier.
COPY . .

# ÉTAPE 6 : EXPOSER LE PORT
# -------------------------
# On dit à Docker que notre application va écouter sur le port 8080.
# C'est comme dire "mon application sera accessible sur le port 8080".
# Le port 8080 correspond à celui défini dans notre fichier app.js.
EXPOSE 8080

# ÉTAPE 7 : DÉFINIR LA COMMANDE DE DÉMARRAGE
# ------------------------------------------
# On dit à Docker quelle commande exécuter quand le conteneur démarre.
# Ici, on lance notre application Node.js avec le fichier app.js.
CMD [ "node", "app.js" ]