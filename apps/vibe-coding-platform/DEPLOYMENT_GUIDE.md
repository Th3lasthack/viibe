# 🚀 Guide de Déploiement sur Vercel

Ce guide vous explique comment déployer votre site de génération de vidéos sur Vercel, étape par étape.

## 📋 Prérequis

- Un compte GitHub (vous l'avez déjà puisque votre code est sur GitHub)
- 5 minutes de votre temps
- C'est tout ! Vercel est **100% GRATUIT** pour les projets personnels

---

## 🎯 Étape 1 : Créer un compte Vercel

### Sur votre téléphone ou ordinateur :

1. **Allez sur** : https://vercel.com/signup

2. **Cliquez sur "Continue with GitHub"**
   - Cela connectera automatiquement votre compte GitHub à Vercel
   - Vous n'aurez pas besoin de créer un nouveau mot de passe

3. **Autorisez Vercel** à accéder à votre compte GitHub
   - GitHub vous demandera la permission
   - Cliquez sur **"Authorize Vercel"**

4. **C'est fait !** Vous avez maintenant un compte Vercel

---

## 🔗 Étape 2 : Importer votre projet

### Une fois connecté à Vercel :

1. **Vous arriverez sur le Dashboard Vercel**
   - Vous verrez un bouton **"Add New..."** ou **"Import Project"**
   - Cliquez dessus

2. **Choisissez "Import Git Repository"**

3. **Trouvez votre repository**
   - Vercel affiche tous vos repos GitHub
   - Cherchez : **"Th3lasthack/viibe"**
   - Cliquez sur **"Import"** à côté

4. **Configuration du projet** :

   Vercel va détecter automatiquement que c'est un projet Next.js. Vous devez configurer :

   **Root Directory** (IMPORTANT) :
   ```
   apps/vibe-coding-platform
   ```
   ⚠️ Entrez exactement ceci car votre projet est dans un sous-dossier !

   **Framework Preset** :
   - Devrait dire "Next.js" automatiquement ✅

   **Build Command** :
   ```
   npm run build
   ```

   **Output Directory** :
   ```
   .next
   ```

   **Install Command** :
   ```
   npm install
   ```

5. **Cliquez sur "Deploy"**
   - Vercel va maintenant construire et déployer votre site
   - Cela prend 2-5 minutes

---

## ⏳ Étape 3 : Attendre le déploiement

### Pendant le déploiement :

- Vous verrez une animation de construction (logs qui défilent)
- Vercel installe les dépendances, build le projet, etc.
- **NE FERMEZ PAS LA PAGE**

### Quand c'est terminé :

- Vous verrez des confettis 🎉 ou un message "Congratulations!"
- Vercel vous donne **VOTRE LIEN PUBLIC**
- Il ressemble à : `https://viibe-xxxxx.vercel.app`

---

## 🌐 Étape 4 : Accéder à votre site

### Votre site est maintenant en ligne !

**URL principale** : `https://votre-projet.vercel.app`

**Générateur de vidéos** : `https://votre-projet.vercel.app/video-generator`

### Copier votre lien :

1. Sur Vercel, cliquez sur **"Visit"** ou copiez l'URL affichée
2. Partagez ce lien - il fonctionne sur **n'importe quel appareil**
3. Le site est accessible **partout dans le monde** 🌍

---

## 🔄 Étape 5 : Mises à jour automatiques

### La magie de Vercel :

- **Chaque fois que vous poussez du code sur GitHub**, Vercel redéploie automatiquement
- Vous n'avez RIEN à faire
- Le site se met à jour tout seul en 2-3 minutes

---

## 🎨 Personnalisation (Optionnel)

### Changer le nom de domaine :

1. Dans Vercel, allez dans **Settings** > **Domains**
2. Vous pouvez :
   - Ajouter un **domaine personnalisé** (ex: `mon-site.com`)
   - Ou changer le sous-domaine Vercel (ex: `video-generator.vercel.app`)

---

## ⚙️ Variables d'Environnement (Si nécessaire)

Si votre site a besoin de clés API (OpenAI, Claude, etc.) :

1. Dans Vercel : **Settings** > **Environment Variables**
2. Ajoutez vos clés :
   ```
   AI_GATEWAY_BASE_URL=votre_valeur
   OPENAI_API_KEY=votre_clé
   ```
3. Redéployez en cliquant sur **"Redeploy"**

---

## 🆘 Problèmes Courants

### ❌ "Build Failed"
- Vérifiez que **Root Directory** = `apps/vibe-coding-platform`
- Vérifiez les logs d'erreur dans Vercel
- Le build fonctionne localement ? Il devrait fonctionner sur Vercel

### ❌ "Page 404"
- Vérifiez que vous avez bien mis le bon **Root Directory**
- Essayez d'aller sur `/video-generator` directement

### ❌ "Remotion ne fonctionne pas"
- Remotion nécessite un serveur Node.js pour le rendu vidéo
- Vercel supporte cela, mais assurez-vous que les routes API sont configurées

---

## 📱 Résumé pour votre téléphone

1. **Ouvrez** : https://vercel.com/signup
2. **Connectez GitHub**
3. **Importez** : `Th3lasthack/viibe`
4. **Root Directory** : `apps/vibe-coding-platform`
5. **Deploy** → Attendez 3 min
6. **Copiez votre lien** : `https://xxx.vercel.app`
7. **C'est fini !** 🎉

---

## 🎯 Avantages de Vercel

✅ **Gratuit** pour projets personnels
✅ **Rapide** - CDN mondial
✅ **HTTPS automatique** - sécurisé par défaut
✅ **Mises à jour automatiques** depuis GitHub
✅ **Pas de maintenance** - tout est géré
✅ **Analytics inclus** - voir qui visite votre site

---

## 🔗 Liens Utiles

- **Vercel Dashboard** : https://vercel.com/dashboard
- **Documentation Vercel** : https://vercel.com/docs
- **Support Vercel** : https://vercel.com/support

---

Bon déploiement ! 🚀

Si vous rencontrez un problème, partagez-moi le message d'erreur et je vous aiderai.
