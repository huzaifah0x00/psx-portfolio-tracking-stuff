import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './apps/web/e2e',
  use: {
    baseURL: 'http://localhost:3000',
  },
  webServer: {
    command: 'npm run dev --workspace web',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
});
