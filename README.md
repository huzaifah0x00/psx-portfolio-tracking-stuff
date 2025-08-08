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

## Deployment

This repository includes a GitHub Actions workflow that builds the apps and deploys them to a DigitalOcean Droplet.

- Deployment targets `psx.huzaifah.dev` and configures Nginx with basic HTTP authentication.
- Default credentials: **psxadmin / TempAuth2024!** (hash: `$6$XB.2jOss1EIvmwxm$d91Y13L0xtm4OpmT6Vb.AY1DwnvIRzuwv3JwKG0xdd.0t1ITXWhcckjDB9.4100QO4Vg3gvaCyxnKMQNiM6Jn/`)
- The workflow currently hardcodes SSH and auth details for demonstration. **Move these values into GitHub Secrets** before using in production.

The workflow also provisions an Nginx site and manages `pm2` processes `psx-web` and `psx-api` on the remote server.

## License

This project is released under the MIT License.
