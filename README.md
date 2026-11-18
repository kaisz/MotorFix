# MotorFix

Site statique (Astro + Tailwind CSS) pour MotorFix, réparation de moteurs électriques.

## Lancer en local

```bash
npm install
npm run dev
```

Le site de développement est servi avec le préfixe `/MotorFix/`.

## Déploiement GitHub Pages

Le workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) installe les dépendances, lance `astro build`, puis publie le dossier généré avec `actions/deploy-pages`.

Dans `astro.config.mjs` :

- `site`: `https://kaisz.github.io`
- `base`: `/MotorFix/`
- `output`: `static`

La source GitHub Pages du dépôt doit être **GitHub Actions**. L’adresse publique est [https://kaisz.github.io/MotorFix](https://kaisz.github.io/MotorFix).

Le contact se fait uniquement par WhatsApp : [+216 20 535 769](https://wa.me/21620535769).
