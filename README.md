# ayxos.github.io

Personal site of **Marco A. Pajares Silva** — Head of Core Development @ Gravite (Hamburg).

Live at **https://ayxos.github.io/**

An interactive, Minecraft-inspired CV with a **Life / Projects** toggle:

- **Life** — a self-contained page (HTML + inline CSS + inline canvas JS, no build step,
  no dependencies): the career journey, a pixel character that grows/suits-up as you scroll,
  and a "Things I've built" section.
- **Projects** — the classic portfolio, embedded and rendered in an isolated iframe. Its
  styling comes from `public/css/styl.min.css`.

## Editing

Everything for the main experience lives in `index.html`. Edit it, commit, push — GitHub
Pages serves the root of `master` and updates within a minute or two.

## Files

- `index.html` — the whole site (Life view + embedded Projects view)
- `public/` — CSS/JS/fonts used by the Projects view (**required** — do not delete)
- `marcopajaresCV.pdf` — CV, linked from the Projects view
- `.nojekyll` — serve files as-is (skip Jekyll)
