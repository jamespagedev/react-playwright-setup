import { test, expect } from "@playwright/test";

test.describe("width test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector(".App");
  });

  test("App", async ({ page }) => {
    const title = page.locator(".App > header > p");
    const link = page.locator(".App > header > a");
    await expect(title).toHaveText("Edit src/App.js and save to reload.");
    await expect(link).toHaveText("Learn React");
  });
});
