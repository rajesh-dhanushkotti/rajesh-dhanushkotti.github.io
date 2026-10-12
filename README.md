# Dr. Rajesh Dhanushkotti – Research Portfolio (React)

A multi-page research portfolio built with React and Vite.

## Run it on your computer

1. Install **Node.js** (version 18 or newer) from https://nodejs.org
2. Open a terminal in this folder and run:

   ```bash
   npm install
   npm run dev
   ```

3. Open the address it prints (usually http://localhost:5173). The page reloads
   automatically every time you save a change.

## Update your content

**Almost everything lives in one file: `src/data/profile.js`.**

| To change…                 | Edit this in `profile.js`                      |
| -------------------------- | ---------------------------------------------- |
| Name, title, tagline, bio  | `profile`                                      |
| Citation numbers           | `metrics` (also feeds the home page boxes)     |
| Home page "At a glance"    | `stats`                                        |
| Latest news                | `news` (newest first)                          |
| A new paper                | `publications` (copy a block, paste at top)    |
| Conferences                | `conferences`                                  |
| Gallery photos             | `gallery` (see below)                          |
| Media cards                | `media`                                        |

**Adding a gallery photo:** put the image in `public/gallery/` (for example
`public/gallery/imlb-2026.jpg`), then in `gallery` set
`image: "gallery/imlb-2026.jpg"`.

**Menu order or labels:** edit the `PAGES` list at the top of `src/App.jsx`.

**Colors and fonts:** the color variables are at the top of `src/styles.css`.

## Project structure

```
index.html              page shell and fonts
public/                 images (portrait, gallery photos)
src/
  data/profile.js       ALL portfolio content
  App.jsx               menu list, page switching, light/dark theme
  components/
    Header.jsx          top bar and navigation (with mobile menu)
    Common.jsx          shared pieces: page headings, timelines, chips
  pages/
    Home.jsx            home page
    Publications.jsx    publication list with filters
    Sections.jsx        Education, Experience, Research, Patents,
                        Highlights, Conferences, Gallery, Media, Contact
  styles.css            all styling
```

## Publish it

```bash
npm run build
```

This creates a `dist/` folder containing the finished website. Upload the
**contents** of `dist/` to any static host:

- **Netlify Drop:** drag the `dist` folder onto https://app.netlify.com/drop
- **GitHub Pages (automatic):** push this whole project to a GitHub repository
  named `yourusername.github.io`. In the repository, go to
  **Settings → Pages → Source** and choose **GitHub Actions**. The included
  workflow (`.github/workflows/deploy.yml`) then rebuilds and publishes the
  site every time you push a change.

Page links use `#` addresses (for example `/#publications`), so the site works
on any host without extra server setup.
