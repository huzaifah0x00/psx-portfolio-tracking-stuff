# Progress

## Current Status

- Repository initialized with basic API and web apps.
- Added `PROGRESS.md` and `AGENTS.md` for tracking and instructions.
- Implemented in-memory user registration and login endpoints in API.
- Configured GitHub Actions workflow for deploying to a DigitalOcean droplet.
- Updated `AGENTS.md` to require running linting and formatting before commits.
- Added Nginx configuration with basic auth and hardcoded deployment credentials for `psx.huzaifah.dev`.

## Next Steps

- Integrate persistent database (e.g., PostgreSQL with Prisma) for user storage.
- Add password hashing and authentication tokens (JWT).
- Design portfolio data models and CRUD endpoints.
- Move hardcoded deployment credentials into GitHub Secrets and finish server provisioning.
