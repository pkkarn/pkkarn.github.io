# Technical Explanation: Portfolio Architecture & Deployment

This document provides a detailed breakdown of the technical decisions, codebase structure, and automation workflows implemented during the portfolio revamp.

---

## 🏗️ 1. Deployment Architecture (GitHub Actions)

To ensure the portfolio is always up-to-date with the latest code, we implemented a **Continuous Deployment (CD)** pipeline using GitHub Actions.

### The `deploy.yml` Workflow
Located at `.github/workflows/deploy.yml`, this script automates the build process:
- **Triggers:** Fires on every `push` to the `main` branch.
- **Environment:** Runs on `ubuntu-latest`.
- **Build Job:** 
  - Installs dependencies using `npm install`.
  - Compiles the React/Vite app into optimized static files via `npm run build`.
  - Collects the output from the `dist/` folder.
- **Deployment Job:** 
  - Uses the official `actions/upload-pages-artifact` to bundle the build.
  - Deploys the bundle directly to the GitHub Pages environment without needing a separate `gh-pages` branch.

---

## 🌐 2. Custom Domain & Routing Logic

Handling a custom domain like `portfolio.logchit.com` requires specific configuration at both the build and hosting levels.

### The Root Domain Strategy
Initially, the site was hosted at a sub-path (`/pk-s-kinetic-portfolio/`). To move it to a clean root domain, we:
1.  **Renamed the repository** to `pkkarn.github.io`. This signals GitHub to treat it as the primary user site.
2.  **CNAME file:** Created `public/CNAME` containing `portfolio.logchit.com`. When Vite builds the project, this file is moved to the root of the site, telling GitHub which domain to "listen" for.
3.  **Vite Config (`vite.config.ts`):** Removed the `base` property. When hosting at a root domain or custom subdomain, the base must be `/` for asset paths to resolve correctly.
4.  **React Router (`App.tsx`):** Removed the `basename` from `BrowserRouter`. This ensure that internal links don't prepended unnecessary folder names.

---

## 🔍 3. Project Analysis via GitHub CLI (`gh`)

To populate the portfolio with real data, I used the **GitHub CLI** to perform deep analysis of your repositories. 

### Key Commands Used:
- **`gh repo view pkkarn/[repo-name]`**:
  - *Purpose:* I ran this for every project you mentioned (GOE, XAR, etc.).
  - *Outcome:* This allowed me to read the full `README.md` and repository description to extract:
    - Clear, technical descriptions of the project's purpose.
    - The specific technologies used (extracted from the code and README content).
- **`gh repo edit --visibility public`**:
  - *Context:* GitHub Pages (Free) 404s on private repos.
  - *Action:* Used to verify or change the visibility so the deployment would go live.
- **`gh api -X PATCH repos/pkkarn/pkkarn.github.io/pages -f build_type='workflow'`**:
  - *Context:* Fixed the "HttpError: Not Found" build failure.
  - *Action:* Programmatically told GitHub to ignore the "deploy from branch" default and use the new "GitHub Actions" deployment method.

---

## 💻 4. Codebase Highlights

### `src/components/ProjectsSection.tsx`
- **Logic:** Instead of hardcoding HTML for every project, we use a `projects` array of objects.
- **Mapping:** The component maps through this array to render `ProjectCard` components, ensuring a consistent UI even as the list grows.

### `src/components/HeroSection.tsx`
- **Parallax Engine:** Uses a custom `useParallax` hook to track scroll position and mouse movement.
- **Dynamic Transforms:** The 3D effect on the hero text is achieved by applying `rotateX` and `rotateY` based on the mouse's relative position on the screen, creating a high-end interactive feel.

### `src/components/SkillsSection.tsx`
- **HSL Color System:** Each skill uses a specific HSL color string. When you hover, a dynamic background glow is generated using that specific color with reduced opacity, creating a "themed" hover effect for every tech stack.

---

## 🛠️ Summary of Repository State
The codebase is now fully decoupled from local environment constraints and is wired directly into a custom subdomain on Cloudflare. All assets are optimized for root-level deployment.
