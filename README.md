# Vivek Kumar — Software Engineer Portfolio

A premium, responsive developer portfolio showcasing my software engineering journey, backend development work, full-stack projects, technical skills, certifications, and GitHub activity.

**Live Website:** [vivekkushwahaofficial.tech](https://vivekkushwahaofficial.tech/)  
**GitHub Profile:** [@Vivekkushwahaofficial](https://github.com/Vivekkushwahaofficial)  
**LinkedIn:** [Connect with me](https://www.linkedin.com/in/vivekkushwahaofficial/)  
**Contact:** [vivekkushwaha.tech@zohomail.in](mailto:vivekkushwaha.tech@zohomail.in)

---

## Overview

This portfolio is built to communicate how I approach software engineering through practical projects, backend architecture, developer tooling, and modern web development.

Rather than focusing only on visual presentation, it highlights project workflows, technology choices, system integrations, and publicly accessible source code.

The interface combines a dark cinematic design, restrained blue and cyan accents, interactive technical visualizations, and motion-driven transitions to create a focused developer experience.

## Features

- **Responsive interface** — Layouts designed for mobile, tablet, laptop, and desktop screens.
- **Animated introduction** — A cinematic entry experience with staged transitions.
- **Interactive technology visualizations** — Animated network elements and a technology constellation.
- **Engineering-focused skills section** — Technologies organized by backend engineering, data persistence, frontend integration, delivery tooling, and AI.
- **Project case studies** — Problem statements, solutions, technology stacks, workflows, and available project links.
- **Experience section** — Highlights backend development and practical engineering contributions.
- **Certification showcase** — Displays certificates, including AWS Academy Cloud Foundations, with a public credential verification link where available.
- **GitHub activity section** — Displays externally generated contribution and streak visualizations linked to my public GitHub profile.
- **Contact section** — Provides direct contact links and a contact form.
- **Motion accessibility** — Uses reduced-motion preferences in animation components.
- **SEO metadata** — Includes page metadata, Open Graph tags, canonical URL, and structured person data.
- **Reusable components** — Shared React components keep the interface organized and maintainable.

## Technology Stack

| Category | Technologies |
|---|---|
| Frontend framework | React 19 |
| Language | TypeScript |
| Build tool | Vite 7 |
| Styling | Tailwind CSS v4 |
| Animation | Motion |
| Icons | Lucide React, React Icons |
| UI utilities | React Hot Toast, React Simple Typewriter |
| Analytics | Vercel Analytics |
| Package manager | pnpm |
| Version control | Git and GitHub |
| Deployment | Vercel-compatible Vite production build |

## Featured Projects

### 1. CodeSyncVault — Flagship Project

**Developer Coding Solution Management Platform**

CodeSyncVault focuses on reducing the manual effort involved in preserving coding solutions across online programming platforms.

**Key workflow:**

Coding platform → Browser extension → Submission detection → Metadata and solution extraction → Spring Boot API → GitHub synchronization

**Technology stack:**
- WXT
- React and TypeScript
- Java and Spring Boot
- GitHub API
- OAuth 2.0

**Links:** [Source Code](https://github.com/vivekkushwahaofficial/CodeSyncVault) · [Live Website](https://code-vault-website.vercel.app/) · [Chrome Web Store](https://chromewebstore.google.com/detail/codeSyncvault/loigjljekeahnjccojnnkmagibghofbn)

### 2. Legal Aid Matching Platform

**Internship Project — Infosys Springboard**

A legal assistance platform developed through team-based work, with a focus on backend modules, API development, authentication, and relational data integration.

**Technologies:** Java, Spring Boot, Spring Security, Spring Data JPA, PostgreSQL, JWT, and REST APIs.

### 3. PeerNexus

**Full-Stack Collaboration Platform**

A collaborative learning and messaging application combining Spring Boot APIs with real-time WebSocket communication.

**Technologies:** Java, Spring Boot, React, PostgreSQL, WebSockets, JWT, Docker, and Cloudinary.

**Links:** [Source Code](https://github.com/vivekkushwahaofficial/peernexus) · [Live Website](https://peernexus.vercel.app/)

### 4. Employee Management System

**Full-Stack Application**

An employee management application demonstrating layered backend architecture, CRUD operations, REST APIs, and relational database persistence.

**Technologies:** Java, Spring Boot, React, PostgreSQL, and Spring Data JPA.

**Links:** [Source Code](https://github.com/Vivekkushwahaofficial/employee-management-system) · [Live Website](https://employee-management-system-wnla.vercel.app/)

## Technical Focus

My current engineering interests include:

- **Backend development:** Java, Spring Boot, REST API design, validation, and application security.
- **Data and persistence:** PostgreSQL, MySQL, MongoDB, SQL, Hibernate, and Spring Data JPA.
- **Authentication and integration:** Spring Security, JWT, OAuth 2.0, and external APIs.
- **Frontend development:** React, TypeScript, JavaScript, Vite, and Tailwind CSS.
- **Developer tooling:** Git, GitHub, Maven, Postman, Docker, and CI/CD concepts.
- **AI and automation:** Python, AI API integrations, and practical automation workflows.

## Certifications

The portfolio includes the following certificates:

- Java Foundation Certification — Infosys Springboard
- Programming in Java — NPTEL
- Building Full-Stack Apps with React and Spring — LinkedIn Learning
- AWS Academy Graduate — Cloud Foundations

The AWS Academy credential includes a public verification link through Credly.

## Getting Started

### Prerequisites

Install the following:

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/installation)
- [Git](https://git-scm.com/)

### 1. Clone the repository

```bash
git clone https://github.com/vivekkushwahaofficial/vivek-portfolio.git
cd vivek-portfolio
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start the development server

```bash
pnpm dev
```

Vite starts the local development server. The configured development port is `5010`.

### 4. Create a production build

```bash
pnpm build
```

The generated production assets are written to the `dist/` directory.

### 5. Preview the production build

```bash
pnpm preview
```

### Available Scripts

| Command | Purpose |
|---|---|
| `pnpm dev` | Start the development server |
| `pnpm build` | Build the application for production |
| `pnpm preview` | Preview the production build locally |
| `pnpm lint` | Run ESLint checks |

## Project Structure

```text
vivek-portfolio/
├── public/
├── src/
│   ├── assets/
│   │   └── certificates/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroNetwork.tsx
│   │   ├── SkillsConstellation.tsx
│   │   └── ProjectCaseStudy.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Certification.tsx
│   │   ├── Publication.tsx
│   │   ├── Projects.tsx
│   │   ├── GitHub.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── pnpm-lock.yaml
├── vite.config.js
└── README.md
```

*The structure above highlights the main application files; supporting components, styles, and assets are also included in the repository.*

## Design and Engineering Principles

- Component-based React architecture.
- Responsive layouts with mobile-first considerations.
- Purposeful animations and interactive feedback.
- Semantic HTML and accessible navigation patterns.
- Reduced-motion support in animation components.
- Lazy-loaded external GitHub activity images.
- Production builds optimized through Vite.
- SEO metadata and descriptive document structure.
- Public links for project exploration and credential verification.

## Deployment

The application is built with Vite and can be deployed to platforms that support static frontend applications, including Vercel.

Typical deployment workflow:

1. Connect the GitHub repository to the hosting platform.
2. Set the build command to `pnpm build`.
3. Set the output directory to `dist`.
4. Deploy the application and verify the live site.

If the contact form or external activity visualizations depend on third-party services, their configuration and availability must also be checked after deployment.

## Git Workflow

The repository uses `main` and `develop` branches.

- `develop` — Integration and ongoing development.
- `main` — Production-oriented branch.

Example workflow for a new change:

```bash
git checkout develop
git pull --rebase origin develop

# Make and test your changes.

pnpm build

git add .
git commit -m "feat: describe your change"
git push origin develop
```

Promote tested changes from `develop` to `main` through your chosen merge or release workflow.

## Connect

I'm interested in software engineering, backend development, developer tools, open-source collaboration, and building practical software products.

- **GitHub:** https://github.com/Vivekkushwahaofficial
- **LinkedIn:** https://www.linkedin.com/in/vivekkushwahaofficial/
- **Email:** vivekkushwaha.tech@zohomail.in
- **Portfolio:** https://vivekkushwahaofficial.tech/

---

**Designed and built by Vivek Kumar**

Java · Spring Boot · React · TypeScript · AI · Open Source
