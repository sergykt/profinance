import { test as base } from '@playwright/test';
import { CatalogPage } from '../pages/catalog.page';

export const test = base.extend<{ catalogPage: CatalogPage }>({
  catalogPage: async ({ page }, use) => {
    const catalogPage = new CatalogPage(page);
    await catalogPage.goto();

    await use(catalogPage);
  },
});
