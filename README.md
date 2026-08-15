# Portfolio

A modern, responsive portfolio built with React and Tailwind CSS.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need Node.js and npm installed on your machine.

### Installation

1. Clone the repository
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
   The application will be available at [http://localhost:3000](http://localhost:3000).

## Deployment

This project is configured to deploy automatically to GitHub Pages using the `gh-pages` package.

To publish your latest changes:

1. Make sure you have committed and pushed your latest code to your remote repository:
   ```sh
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```
2. Run the deployment script:
   ```sh
   npm run deploy
   ```

This command will automatically:
- Create an optimized production build of your React app.
- Push the build folder to the `gh-pages` branch.
- Update your live website at the URL specified in your `package.json` `homepage` field.

*(Note: It may take a couple of minutes for GitHub's CDN cache to clear and show the newest version of your site.)*
