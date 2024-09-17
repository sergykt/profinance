import { type Page, type Locator } from '@playwright/test';

export class CatalogPage {
  private readonly page: Page;

  private readonly importButton: Locator;

  private readonly tableBody: Locator;

  private readonly barcodeFilter: Locator;

  private readonly brandFilter: Locator;

  private readonly nameFilter: Locator;

  private readonly minPriceFilter: Locator;

  private readonly maxPriceFilter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.importButton = page.getByRole('button', { name: 'Загрузить данные' });
    this.tableBody = page.getByTestId('catalog-table');
    this.barcodeFilter = page.getByPlaceholder(/56432421343/i);
    this.brandFilter = page.getByPlaceholder(/Samsung/i);
    this.nameFilter = page.getByPlaceholder(/Galaxy M30s/i);
    this.minPriceFilter = page.getByPlaceholder(/от 100/i);
    this.maxPriceFilter = page.getByPlaceholder(/до 200/i);
  }

  async goto() {
    await this.page.goto('/');
  }

  async importData() {
    await this.importButton.click();
  }

  async getRowsCount() {
    return this.tableBody.getByRole('row').count();
  }

  async setRowsPerPage(rows: number) {
    await this.tableBody.getByRole('button', { name: /rows per page/i }).click();
    await this.tableBody.getByRole('option', { name: String(rows) }).click();
  }

  async setBrandFilter(brand: string) {
    await this.brandFilter.fill(brand);
  }

  async setBarcodeFilter(barcode: string) {
    await this.barcodeFilter.fill(barcode);
  }

  async setNameFilter(name: string) {
    await this.nameFilter.fill(name);
  }

  async setMinPriceFilter(price: number) {
    await this.minPriceFilter.fill(String(price));
  }

  async setMaxPriceFilter(price: number) {
    await this.maxPriceFilter.fill(String(price));
  }

  async editCell(cellNumber: number, value: string) {
    const cell = this.tableBody.getByRole('cell').nth(cellNumber - 1);
    await cell.dblclick();
    const input = cell.getByRole('textbox');
    await input.fill(value);
    await input.blur();
  }
}
