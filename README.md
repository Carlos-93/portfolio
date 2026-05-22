<p align="center"><img src="https://raw.githubusercontent.com/Carlos-93/react-weather-map/main/public/logo192.png" width="15%"></p>

# Welcome to my personal portfolio

Static site built with React, Vite, TypeScript, and Tailwind CSS. Includes internationalization (i18next) and routing with React Router.

## Requirements

- [Node.js](https://nodejs.org/) v20.19 or later (v22+ recommended for ESLint 10)
- [pnpm](https://pnpm.io/) v11 (the project pins the version via `packageManager` in `package.json`)

Enable pnpm with Corepack (bundled with Node):

```bash
corepack enable
```

## Installation

```bash
git clone <repository-url>
cd portfolio
pnpm install
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Development server with hot reload ([http://localhost:5173](http://localhost:5173)) |
| `pnpm build` | Type-check (`tsc`) and production build to `dist/` |
| `pnpm preview` | Serve `dist/` locally to test the production build |
| `pnpm lint` | Run ESLint across the project |

## Deployment

Production output is in `dist/`. On platforms like Vercel, the build command is typically `pnpm build`; pnpm is auto-detected via the `packageManager` field.

## Stack

- React 19 + TypeScript 6
- Vite 8
- Tailwind CSS 4
- react-i18next / i18next
- ESLint 10 (flat config)

## Learn more

- [Vite documentation](https://vite.dev/)
- [React documentation](https://react.dev/)
- [pnpm documentation](https://pnpm.io/)