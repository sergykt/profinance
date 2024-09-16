import { expect, test } from '@playwright/test';

test.describe('App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('App', async ({ page }) => {
    await expect(page).toHaveTitle(/Profinance/);
  });
});
