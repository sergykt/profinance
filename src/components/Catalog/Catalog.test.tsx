import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { Catalog } from './Catalog';

describe('Catalog', () => {
  it('should import data', async () => {
    render(<Catalog />);

    const importButton = await screen.findByRole('button', { name: /Загрузить данные/i });
    const tbody = await screen.findByTestId('catalog-table');

    const rowsBefore = within(tbody).queryAllByRole('row');
    expect(rowsBefore).toHaveLength(1);

    fireEvent.click(importButton);

    await waitFor(() => {
      const rowsAfter = within(tbody).queryAllByRole('row');
      expect(rowsAfter).toHaveLength(10);
    });
  });

  it('should calculate the amount correctly', async () => {
    render(<Catalog />);

    const importButton = await screen.findByRole('button', { name: /Загрузить данные/i });
    const tbody = await screen.findByTestId('catalog-table');
    fireEvent.click(importButton);

    await waitFor(() => {
      const rowsAfter = within(tbody).queryAllByRole('row');
      expect(rowsAfter).toHaveLength(10);
    });

    const paginationSelector = screen.getByRole('combobox', { name: /rows per page/i });
    fireEvent.mouseDown(paginationSelector);
    const option = await screen.findByRole('option', { name: '100' });
    fireEvent.click(option);

    const cells = within(tbody).queryAllByRole('cell');
    const countCells = cells
      .filter((_, index) => {
        return index % 5 === 3;
      })
      .map((cell) => Number(cell.textContent))
      .reduce((a, b) => a + b, 0)
      .toFixed(2);
    expect(screen.getByText(countCells)).toBeInTheDocument();
  });

  it('should filter correctly', async () => {
    render(<Catalog />);

    const importButton = await screen.findByRole('button', { name: /Загрузить данные/i });
    const tbody = await screen.findByTestId('catalog-table');
    fireEvent.click(importButton);

    await waitFor(() => {
      const rowsAfter = within(tbody).queryAllByRole('row');
      expect(rowsAfter).toHaveLength(10);
    });

    const brandInput = screen.getByPlaceholderText(/samsung/i);
    fireEvent.change(brandInput, { target: { value: 'alcatel' } });
    const barcodeInput = screen.getByPlaceholderText('56432421343');
    fireEvent.change(barcodeInput, { target: { value: '33380' } });
    const nameInput = screen.getByPlaceholderText(/Galaxy M30s/i);
    fireEvent.change(nameInput, { target: { value: 'alcatel Idol 4' } });
    const priceMinInput = screen.getByPlaceholderText('от 100');
    fireEvent.change(priceMinInput, { target: { value: '222' } });
    const priceMaxInput = screen.getByPlaceholderText('до 200');
    fireEvent.change(priceMaxInput, { target: { value: '222' } });

    await waitFor(() => {
      expect(within(tbody).getByText('alcatel')).toBeInTheDocument();
    });
  });

  it('should edit correctly', async () => {
    render(<Catalog />);

    const importButton = await screen.findByRole('button', { name: /Загрузить данные/i });
    const tbody = await screen.findByTestId('catalog-table');
    fireEvent.click(importButton);

    await waitFor(() => {
      const rowsAfter = within(tbody).queryAllByRole('row');
      expect(rowsAfter).toHaveLength(10);
    });

    const barcodeCell = within(tbody).getAllByRole('cell')[0];

    fireEvent.doubleClick(barcodeCell);
    fireEvent.change(await screen.findByPlaceholderText(/Баркод/i), {
      target: { value: '55555' },
    });
    fireEvent.blur(await screen.findByPlaceholderText(/Баркод/i));
    await waitFor(() => {
      expect(screen.queryByPlaceholderText(/Баркод/i)).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(within(tbody).getAllByRole('cell')[0]).toHaveTextContent('55555');
    });

    fireEvent.doubleClick(barcodeCell);
    fireEvent.change(await screen.findByPlaceholderText(/Баркод/i), {
      target: { value: '55555s' },
    });
    fireEvent.blur(await screen.findByPlaceholderText(/Баркод/i));
    await waitFor(() => {
      expect(screen.queryByPlaceholderText(/Баркод/i)).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(within(tbody).getAllByRole('cell')[0]).toHaveTextContent('55555');
    });
  });
});
