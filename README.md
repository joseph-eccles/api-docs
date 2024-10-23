# Bookshop API Documentation

Welcome to the Bookshop API documentation! This project provides comprehensive documentation for the Bookshop API, which allows you to manage books, authors, and other resources in an online bookshop. The documentation is available online at <a href="https://joseph-eccles.github.io/api-docs" target="_blank">joseph-eccles.github.io/api-docs</a>.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Docs-as-Code Approach](#docs-as-code-approach)

## Technologies Used

The Bookshop API documentation is built using the following technologies:

- **[Next.js](https://nextjs.org/)**: A React-based framework for building static and server-rendered web applications. It provides the foundation for the documentation site.
- **[MDX](https://mdxjs.com/)**: A format that allows writing JSX in Markdown files, making it possible to create interactive and dynamic documentation pages.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework that is used to style the documentation site with minimal effort.
- **[GitHub Actions](https://github.com/features/actions)**: Automates the deployment process, ensuring that changes to the documentation are published to GitHub Pages.
- **[GitHub Pages](https://pages.github.com/)**: Hosts the static site for the documentation at [https://joseph-eccles.github.io/api-docs](https://joseph-eccles.github.io/api-docs).

## Getting Started

To get started with the Bookshop API documentation locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/joseph-eccles/api-docs.git
   cd api-docs

   ```

2. **Install Dependencies**

Make sure you have Node.js installed. Then, run:

```bash
npm install
```

3. **Run the Development Server**

Start the local development server with:

```bash
  npm run dev
```

Open http://localhost:3000 in your browser to see the documentation.

4. **Build the Static Site**

To generate a static version of the site for deployment, run:

```bash
  npm run build
```

5. **Preview the Production Build**

After building, you can preview the production build locally:

```bash
  npm run dev
```

## Deployment

The documentation is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow is set up to trigger on every push to the main branch.

### Deployment Steps

1. **GitHub Actions Workflow:** The repository contains a .github/workflows/deploy.yml file that defines the deployment process. It builds the static site using Next.js and then deploys it to the gh-pages branch.
2. **GitHub Pages Configuration:** The repository is configured to serve the static site from the gh-pages branch. The site is accessible at <a href="https://joseph-eccles.github.io/api-docs" target="_blank">joseph-eccles.github.io/api-docs</a>.

## Docs-as-Code Approach

This project follows the Docs-as-Code approach, which means that the documentation is treated as code and maintained in the same way as software code:

- **Version Control:** The documentation is stored in a Git repository, allowing for version control, collaboration, and tracking of changes.
- **Continuous Integration/Continuous Deployment (CI/CD):** GitHub Actions automates the process of deploying the documentation whenever changes are made to the main branch.
- **Markdown and MDX Files:** The documentation is written in Markdown and MDX, which makes it easy to collaborate and contribute using text-based files.
