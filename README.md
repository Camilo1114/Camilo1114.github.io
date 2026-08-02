# Camilo Ramirez — Engineering Portfolio

Static engineering portfolio designed for GitHub Pages.

## Local preview

From the repository root, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a repository named `Camilo1114.github.io`.
2. Copy the contents of this folder into the repository root.
3. Commit and push to the `main` branch.
4. In GitHub, open **Settings → Pages**.
5. Choose **Deploy from a branch**, then select `main` and `/ (root)`.

The site will be available at `https://camilo1114.github.io/`.

## Before publishing

- Add your CV at `cv/Camilo_Ramirez_CV.pdf`.
- Replace the abstract SVG covers with real project visuals when available.
- Complete the exact **My contribution** sections in the two team-project pages.
- Make any repository public before linking to it from the portfolio.
- Add a LinkedIn link to the header/contact area if desired.
- Review professional projects to ensure no confidential information is exposed.

## Project structure

```text
.
├── index.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── images/
├── projects/
│   ├── mg400.html
│   ├── hyperspectral.html
│   ├── animal-audio.html
│   ├── resistor-classification.html
│   └── scimitar-uav.html
└── cv/
```
