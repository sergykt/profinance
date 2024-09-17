import { type MRT_RowData, type MRT_TableInstance } from 'material-react-table';

export const getTotal = <T extends MRT_RowData>(
  table: MRT_TableInstance<T>,
  id: keyof T & string,
) => {
  const total = table.getSortedRowModel().rows.reduce((sum, row) => {
    const value = Number(row.getValue(id));
    return sum + (Number.isNaN(value) ? 0 : value);
  }, 0);

  return total.toFixed(2);
};
