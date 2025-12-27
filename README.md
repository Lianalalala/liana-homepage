<<<<<<< HEAD
# liana-homepage
Liana's personal website built with React + Vite + Tailwind.
=======
# Liana's Personal Homepage

This is a responsive, single-page personal portfolio website built with React, Vite, and Tailwind CSS v4. It is designed to be deployed to GitHub Pages via GitHub Actions.

## Features

-   **Tech Stack**: React 19 + Vite + Tailwind CSS v4 (using `@tailwindcss/vite`).
-   **Navigation**: Smooth scrolling navigation to sections (Hero, About, Projects, Skills, Contact).
-   **Dark Mode**: Toggleable dark/light theme (persists to local storage).
-   **Responsive Design**: Fully responsive layout optimized for mobile and desktop.
-   **Deployment**: Automated deployment to GitHub Pages using GitHub Actions.

## Local Development

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start Dev Server**:
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173/liana-homepage/` to view it in the browser.

3.  **Build for Production**:
    ```bash
    npm run build
    ```
    The output will be in the `dist` directory.

4.  **Preview Production Build**:
    ```bash
    npm run preview
    ```

## Deployment

The site is automatically deployed to GitHub Pages when you push to the `main` branch.

**Live URL**:
https://lianalalala.github.io/liana-homepage/

### Handling Deployment Issues

If you see a blank page or 404 errors after deployment:

1.  **Check `vite.config.js`**: Ensure the `base` property is set correctly to your repository name.
    ```javascript
    export default defineConfig({
      base: '/liana-homepage/', // MUST match your repo name
      // ...
    })
    ```

2.  **Check GitHub Actions Status**: Go to the "Actions" tab in your repository to see if the build and deploy jobs succeeded.

3.  **Check GitHub Pages Settings**: Go to Settings -> Pages. Ensure the source is set to "GitHub Actions".

4.  **Route Paths**: If assets (images, css) are broken, ensure you are not using absolute paths like `/image.png`. Vite handles relative paths automatically when imported in JS or referenced in CSS.
>>>>>>> c397668 (init)
