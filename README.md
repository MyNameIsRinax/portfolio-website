# Rinax Antonio | Portfolio

My personal portfolio, made for the Web Development Intern skills showcase. It's a single page with three sections: Home, Projects, and Contact.

Live site: https://mynameisrinax.github.io/portfolio-website/

## What's on it

- **Home:** a short intro, my photo, and a bio.
- **Projects:** five things I've built (Stranded on a Raft, Pisonet Simulator, Kusinero Master, the AMORAP website, and Taginting), plus my latest repos pulled live from the GitHub API.
- **Contact:** a form that sends to my inbox through Formspree, plus links to my email, LinkedIn, and GitHub.

It also has a dark mode toggle that remembers your choice, cards that fade in as you scroll, and a layout that works on phones and desktops.

## Built with

- React 18 and Vite
- Plain CSS (Grid and Flexbox, no UI library)
- Formspree for the contact form
- GitHub Pages, deployed with GitHub Actions

## Run it locally

You need Node 18 or newer.

```
npm install
npm run dev
```

Open the address Vite prints, usually http://localhost:5173.

To make a production build, run `npm run build`. To check it, run `npm run preview`.

## Editing

- Projects live in `src/data.js`. Put screenshots in `public/projects/` (1920 x 1080 works best).
- The Formspree form ID is in `src/components/Contact.jsx`.
- Colors and fonts are at the top of `src/style.css`.

## Deploy

1. Push to the `main` branch of a public repo.
2. In the repo, go to Settings, then Pages, and set the source to GitHub Actions.
3. Each push to `main` builds and publishes the site.

## Contact

- Email: rinax.antonio@lsu.edu.ph
- LinkedIn: https://linkedin.com/in/rinax-antonio
- GitHub: https://github.com/mynameisrinax
