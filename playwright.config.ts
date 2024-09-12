import { defineConfig, devices } from '@playwright/test';

const devServerUrl = 'http://localhost:5173';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    actionTimeout: 0,
    baseURL: devServerUrl,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      dependencies: [],
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      dependencies: [],
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
      dependencies: [],
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: devServerUrl,
    reuseExistingServer: !process.env.CI,
  },
});
