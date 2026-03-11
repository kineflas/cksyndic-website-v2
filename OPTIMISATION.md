# Guide d'Optimisation PageSpeed - CK Syndic

Ce document décrit les optimisations implémentées pour améliorer le score PageSpeed mobile.

## 1. Optimisation des Images

### Lazy Loading
- Toutes les images (sauf le logo principal) utilisent `loading="lazy"` pour le chargement différé
- Le logo principal utilise `fetchPriority="high"` pour optimiser le LCP (Largest Contentful Paint)

### Format WebP
Pour convertir vos images PNG/JPG en WebP et améliorer les performances :

```bash
# Installation de cwebp (outil de conversion)
# Sur Ubuntu/Debian:
sudo apt-get install webp

# Sur macOS:
brew install webp

# Conversion d'une image
cwebp -q 80 logock.png -o logock.webp

# Conversion en masse
for file in public/*.{jpg,jpeg,png}; do
  cwebp -q 80 "$file" -o "${file%.*}.webp"
done
```

**Instructions importantes :**
1. Convertissez `logock.png` en `logock.webp` avec une qualité de 80%
2. Gardez les fichiers originaux comme fallback
3. Le fichier `.htaccess` sert automatiquement les versions WebP aux navigateurs compatibles

### Composant OptimizedImage
Un composant React a été créé (`src/components/OptimizedImage.tsx`) pour gérer automatiquement :
- La détection du support WebP
- Le fallback vers l'image originale
- Le lazy loading intelligent

**Utilisation :**
```tsx
import { OptimizedImage } from './components/OptimizedImage';

// Image normale (lazy loading)
<OptimizedImage src="/image.png" alt="Description" />

// Image prioritaire (pour LCP)
<OptimizedImage src="/hero.png" alt="Hero" eager />
```

## 2. Optimisation JavaScript

### Scripts Externes
- **Google Tag Manager** : Chargement différé avec `requestIdleCallback` pour ne pas bloquer le rendu initial
- Les scripts analytics se chargent après que le navigateur soit en idle (2s de délai sinon)
- Cela réduit significativement le JavaScript bloquant au premier chargement

### Code Splitting Optimisé
Configuration dans `vite.config.ts` :
- **react-core** : React et JSX runtime séparés (7 KB)
- **react-dom** : DOM renderer isolé (132 KB)
- **react-router** : Routing séparé (36 KB)
- **icons** : Icônes Lucide en chunk distinct (7 KB)
- **Minification Terser avancée** :
  - 2 passes de compression
  - Suppression console.log, console.info, console.debug
  - Suppression du code mort (dead_code: true)
  - Suppression des variables inutilisées (unused: true)
  - Suppression des commentaires

## 3. Amélioration du Rendu Statique (SEO)

### Problème du Rendu Dynamique (1396%)
Le taux élevé de rendu dynamique empêche Google d'indexer correctement le contenu.

### Solutions Implémentées

#### A. Pre-rendering des Routes
Le fichier `prerender.config.ts` définit toutes les routes à pré-générer :
- Page d'accueil `/`
- Page blog `/blog`
- Toutes les pages d'articles `/blog/:slug`

#### B. Build Optimisé
Le build génère maintenant du HTML statique pour chaque route, permettant :
- Indexation immédiate par Google
- Temps de chargement initial réduit
- Meilleur score SEO

#### C. Meta Tags Dynamiques
Chaque page définit ses propres meta tags (title, description) via `useEffect` pour un SEO optimal.

### Pour Aller Plus Loin (Recommandations)

Si le score reste insuffisant, envisagez :

**Option 1 : Next.js (SSR/SSG complet)**
```bash
# Migration vers Next.js pour SSR natif
npx create-next-app@latest cksyndic-nextjs
```

**Option 2 : Vite SSG avec vite-plugin-ssr**
```bash
npm install vite-plugin-ssr
```

**Option 3 : Gatsby (SSG statique)**
```bash
npx gatsby new cksyndic-gatsby
```

## 4. Configuration .htaccess

Le fichier `.htaccess` a été créé avec :
- Compression gzip pour tous les fichiers texte
- Cache navigateur (1 an pour images, 1 mois pour CSS/JS)
- Redirection automatique vers WebP si disponible
- Headers de cache appropriés

## 5. Build de Production

Pour générer le build optimisé :

```bash
npm run build
```

Le build :
- Compile TypeScript
- Minifie JavaScript et CSS
- Applique le code splitting
- Optimise les assets

## 6. Métriques à Surveiller

Après déploiement, surveillez sur PageSpeed Insights :

1. **LCP (Largest Contentful Paint)** : < 2.5s
   - Optimisé via fetchPriority sur le logo
   - Images WebP pour réduire la taille

2. **FID (First Input Delay)** : < 100ms
   - Scripts defer pour éviter le blocage

3. **CLS (Cumulative Layout Shift)** : < 0.1
   - Dimensions d'images explicites

4. **TBT (Total Blocking Time)** : < 300ms
   - Code splitting et minification

## 7. Checklist de Déploiement

- [ ] Convertir toutes les images PNG/JPG en WebP
- [ ] Uploader les fichiers `.webp` sur le serveur
- [ ] Vérifier que `.htaccess` est présent à la racine
- [ ] Tester le build localement avec `npm run build && npm run preview`
- [ ] Déployer les fichiers du dossier `dist/`
- [ ] Tester sur PageSpeed Insights
- [ ] Vérifier l'indexation Google Search Console

## Support

Pour toute question sur ces optimisations, consultez :
- [Vite Build Optimization](https://vitejs.dev/guide/build.html)
- [WebP Conversion](https://developers.google.com/speed/webp)
- [PageSpeed Insights](https://pagespeed.web.dev/)
