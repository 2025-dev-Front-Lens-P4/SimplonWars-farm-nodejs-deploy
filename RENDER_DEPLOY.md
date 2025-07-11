# 🚀 Déploiement SimplonWars sur Render

## 📋 Prérequis

- ✅ Compte GitHub avec le projet SimplonWars
- ✅ Compte Render (gratuit)
- ✅ Node.js 22+ (déjà configuré dans Dockerfile)

## 🔧 Étapes de déploiement

### 1. Créer un compte Render

1. Aller sur [render.com](https://render.com)
2. Cliquer sur "Get Started"
3. Se connecter avec GitHub

### 2. Créer un nouveau service

1. Dans le dashboard Render, cliquer sur "New +"
2. Sélectionner "Web Service"
3. Connecter le repository GitHub

### 3. Configuration du service

```
Name: simplonwars-app
Environment: Node
Region: Frankfurt (EU)
Branch: main
Root Directory: (laisser vide)
Build Command: npm install
Start Command: node app.js
```

### 4. Variables d'environnement

Dans l'onglet "Environment" :

```
NODE_ENV=production
PORT=8080
```

### 5. Déploiement automatique

- ✅ "Auto-Deploy" activé
- ✅ "Deploy on Push" activé

## 🎯 URLs de l'application

Une fois déployé, vous aurez :

- **Site principal** : `https://simplonwars-app.onrender.com`
- **API docs** : `https://simplonwars-app.onrender.com/api-docs`
- **Animation Star Wars** : `https://simplonwars-app.onrender.com/starwars`

## 🔍 Vérification du déploiement

1. **Health Check** : Render vérifie automatiquement `/`
2. **Logs** : Disponibles dans le dashboard Render
3. **Monitoring** : Métriques automatiques

## 💰 Coûts

- **Plan gratuit** : 750h/mois
- **Votre projet** : ~730h/mois (24h/jour)
- **Reste** : 20h/mois pour les redémarrages

## 🛠️ Troubleshooting

### Problème : Build échoue

```bash
# Vérifier les dépendances
npm install
npm start
```

### Problème : Port non défini

```javascript
// Dans app.js, Render définit automatiquement PORT
const port = process.env.PORT || 8080;
```

### Problème : Fichiers statiques

```javascript
// Vérifier les chemins dans app.js
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
```

## 🎉 Avantages Render

- ✅ **Gratuit** : 750h/mois
- ✅ **HTTPS automatique** : Certificats SSL
- ✅ **Déploiement automatique** : Depuis GitHub
- ✅ **Monitoring** : Logs et métriques
- ✅ **Scalabilité** : Auto-scaling possible
- ✅ **Base de données** : PostgreSQL disponible

## 🔄 Mise à jour

Pour mettre à jour l'application :

1. Pousser les changements sur GitHub
2. Render déploie automatiquement
3. Vérifier les logs dans le dashboard

---

**🎬 SimplonWars sera bientôt en ligne sur Render !**
