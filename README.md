# PSX Portfolio Tracker Monorepo

This repository contains the code for the PSX Portfolio Tracker MVP described in [psx_portfolio_tracking_mvp_prd.md](psx_portfolio_tracking_mvp_prd.md).

## Structure

The project uses **npm workspaces** to manage multiple applications:

- `apps/web` – A Next.js 15 web app styled with Tailwind CSS v4 and shadcn UI components.
- `apps/api` – An Express API written in TypeScript.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the web app in development:
   ```bash
   npm -w apps/web run dev
   ```
3. Run the API in development:
   ```bash
   npm -w apps/api run dev
   ```

## Build & Test

- Lint web app:
  ```bash
  npm -w apps/web run lint
  ```
- Build web app:
  ```bash
  npm -w apps/web run build
  ```
- Build API:
  ```bash
  npm -w apps/api run build
  ```

## License

This project is released under the MIT License.
