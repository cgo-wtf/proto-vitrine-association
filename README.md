# proto site web associatif

Ce dépôt contient le code source du site web de l'Union Départementale des Associations Familiales (UDAF) du Rhône.

## Présentation

Le proto site web associatif est composé de deux parties principales :

- **Blog d'actualités** : Informations sur les événements, services et activités de l'UDAF du Rhône
- **Annuaire des associations** : Répertoire des associations partenaires de l'UDAF du Rhône

![Capture d'écran du site](/public/udaf69-hero.png)

## Déploiement

Le site est configuré pour être déployé automatiquement sur GitHub Pages à l'aide de GitHub Actions. À chaque push sur la branche main, le workflow de déploiement est déclenché :

1. Le site est construit avec la commande `npm run build`
2. Les fichiers générés sont déployés sur GitHub Pages
3. Le site est accessible à l'adresse : https://VOTRE_NOM_UTILISATEUR.github.io/annuaire-blog

Pour activer le déploiement :
- Dans les paramètres du dépôt GitHub, section "Pages", définissez la source sur "GitHub Actions"
- Assurez-vous que votre nom d'utilisateur est correctement configuré dans `astro.config.mjs`

## Fonctionnalités

- ✅ Blog d'actualités avec articles au format Markdown et MDX
- ✅ Annuaire d'associations partenaires avec système de filtrage
- ✅ Interface responsive adaptée aux mobiles et tablettes
- ✅ SEO optimisé avec métadonnées et OpenGraph
- ✅ Flux RSS pour suivre les actualités
- ✅ Design moderne avec animations au défilement (AOS)
- ✅ 100/100 Performance Lighthouse
- ✅ URLs canoniques et métadonnées OpenGraph pour le référencement
- ✅ Support du plan du site (sitemap)
- ✅ Support du flux RSS
- ✅ Support des formats Markdown et MDX

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commandes

Toutes les commandes sont exécutées depuis la racine du projet, dans un terminal :

| Commande                  | Action                                            |
| :------------------------ | :------------------------------------------------ |
| `npm install`             | Installe les dépendances                         |
| `npm run dev`             | Démarre le serveur de développement local à `localhost:4321` |
| `npm run build`           | Construit le site pour la production dans `./dist/` |
| `npm run preview`         | Prévisualise le site construit avant déploiement   |
| `npm run astro ...`       | Exécute les commandes CLI comme `astro add`, `astro check` |
| `npm run astro -- --help` | Affiche l'aide pour l'utilisation de la CLI Astro  |

## 📝 Maintenance

### Ajouter un article de blog

Pour ajouter un nouvel article au blog :
1. Créez un fichier Markdown (.md) ou MDX (.mdx) dans le dossier `src/content/blog/`
2. Ajoutez l'en-tête frontmatter avec les métadonnées (titre, description, date, image)
3. Rédigez le contenu de l'article en utilisant la syntaxe Markdown

### Modifier l'annuaire des associations

Pour mettre à jour l'annuaire des associations :
1. Modifiez le fichier CSV dans `public/data/associations.csv`
2. Suivez le format existant : nom, description, site, email, téléphone, catégories
3. Pour les catégories, utilisez une liste séparée par des virgules
