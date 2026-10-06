# AdityaKraft Portfolio

The portfolio is a single-page React application built with Vite. React Router
renders each page at a clean URL without a `.html` suffix.

## Development

Install dependencies with `npm install`, then start the development server
with `npm run dev`.

Static images, styles, scripts, and the résumé are kept in `public/` and copied
unchanged into the production build.

The production host must serve `index.html` as a fallback for unknown paths so
direct visits and refreshes on React routes continue to work.

## Production

Run `npm run build` to build the site into `dist/`. Deploy the contents of
`dist/` to a static host configured to rewrite extensionless paths to
`index.html`.

Run `npm run preview` to locally serve the production build.

## Pages

- `/` — Home
- `/about` — About
- `/experience` — Experience
- `/work` — Projects
- `/youtube` — YouTube videos and the share-your-journey form
- `/contact` — Contact form and location
- `/article` and `/article2` — Publications
- `/food`, `/krishna`, and `/portfolio-details2` — Project details
- `/portfolio-details` — Portfolio and publications

Legacy `.html` URLs automatically redirect to their extensionless routes.
