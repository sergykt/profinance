import { expect, test } from '@playwright/test';

test('App', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Profinance/);
});
