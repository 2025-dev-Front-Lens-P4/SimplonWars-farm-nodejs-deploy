# 🚀 Configuration Vercel pour GitHub Actions

## ❌ Problème Actuel
Le déploiement échoue car les secrets Vercel ne sont pas configurés dans GitHub.

## ✅ Solution : Configurer les Secrets GitHub

### Étape 1 : Obtenir le Token Vercel

1. **Connectez-vous à Vercel** : https://vercel.com
2. **Allez dans Settings** → **Tokens**
3. **Cliquez sur "Create"** pour créer un nouveau token
4. **Donnez un nom** (ex: "GitHub Actions")
5. **Copiez le token** (il ne sera plus visible après)

### Étape 2 : Obtenir l'ID de l'Organisation

1. **Dans Vercel**, allez dans **Settings** → **General**
2. **Trouvez "Team ID"** (c'est votre ORG_ID)
3. **Copiez cette valeur**

### Étape 3 : Obtenir l'ID du Projet

1. **Dans Vercel**, allez dans votre projet
2. **Cliquez sur "Settings"** du projet
3. **Trouvez "Project ID"**
4. **Copiez cette valeur**

### Étape 4 : Configurer les Secrets GitHub

1. **Allez sur GitHub** → votre repository
2. **Settings** → **Secrets and variables** → **Actions**
3. **Cliquez sur "New repository secret"**
4. **Ajoutez ces 3 secrets** :

| Nom du Secret | Valeur |
|---------------|--------|
| `VERCEL_TOKEN` | Le token Vercel obtenu à l'étape 1 |
| `VERCEL_ORG_ID` | L'ID de l'organisation obtenu à l'étape 2 |
| `VERCEL_PROJECT_ID` | L'ID du projet obtenu à l'étape 3 |

### Étape 5 : Créer le Projet Vercel (si pas encore fait)

Si vous n'avez pas encore de projet Vercel :

1. **Dans Vercel**, cliquez sur "New Project"
2. **Importez votre repository GitHub**
3. **Configurez le projet** :
   - Framework Preset : `Node.js`
   - Root Directory : `./`
   - Build Command : `npm run build` (si applicable)
   - Output Directory : `dist` ou `build` (si applicable)

## 🔧 Configuration Alternative

Si vous préférez utiliser l'action Vercel avec moins de configuration :

```yaml
- name: Deploy to Vercel
  uses: amondnet/vercel-action@v25
  with:
    vercel-token: ${{ secrets.VERCEL_TOKEN }}
    vercel-args: '--prod'
    working-directory: ./
```

Cette version simplifiée ne nécessite que le `VERCEL_TOKEN`.

## 🧪 Test du Déploiement

1. **Poussez du code** sur la branche `main`
2. **Vérifiez les Actions** dans l'onglet GitHub Actions
3. **Le déploiement devrait réussir** avec les secrets configurés

## 📝 Notes Importantes

- ⚠️ **Ne partagez jamais** vos tokens Vercel
- 🔄 **Les secrets sont automatiquement** utilisés par GitHub Actions
- 🌐 **Votre app sera accessible** sur une URL Vercel après déploiement
- 📊 **Vous pouvez suivre** les déploiements dans Vercel Dashboard

## 🆘 En Cas de Problème

1. **Vérifiez les secrets** dans GitHub Settings
2. **Vérifiez les permissions** du token Vercel
3. **Regardez les logs** dans GitHub Actions pour plus de détails 