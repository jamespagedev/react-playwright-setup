// playwright.config.js
// @ts-check
const { devices } = require("@playwright/test");

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  webServer: {
    command: "npm run start",
    port: 3000,
    timeout: 120 * 1000, // 2 minutes
  },
  use: {
    trace: "on-first-retry",
    baseURL: "http://localhost:3000/",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
};

module.exports = config;
