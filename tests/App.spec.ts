import { expect } from '@playwright/test';
import { test } from './fixtures';

test('should import data', async ({ catalogPage }) => {
  expect(await catalogPage.getRowsCount()).toBe(1);
  await catalogPage.importData();
  expect(await catalogPage.getRowsCount()).toBe(10);
});

test('should filter correctly', async ({ catalogPage }) => {
  await catalogPage.importData();

  await catalogPage.setBarcodeFilter('33380');
  await catalogPage.setBrandFilter('alcatel');
  await catalogPage.setNameFilter('alcatel Idol 4');
  await catalogPage.setMinPriceFilter(222);
  await catalogPage.setMaxPriceFilter(222);

  expect(await catalogPage.getRowsCount()).toBe(1);
});

test('should edit correctly', async ({ catalogPage, page }) => {
  await catalogPage.importData();

  await catalogPage.editCell(1, '55555');
  await expect(page.getByText('55555')).toBeVisible();
  await catalogPage.editCell(1, '5555s');
  await expect(page.getByText('55555')).toBeVisible();
});
