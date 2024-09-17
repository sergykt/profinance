/* eslint-disable react/no-unstable-nested-components */
import { useCallback, useMemo, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnFiltersState,
  type MRT_ColumnDef,
} from 'material-react-table';
import { Stack } from '@mui/material';
import { CatalogFilters } from './CatalogFilters';
import { CatalogActions } from './CatalogActions';
import { CustomNumberInput } from './CustomNumberInput';
import { getTotal } from './helpers';
import { type CatalogColumns } from './types';

export const Catalog = () => {
  const [data, setData] = useState<CatalogColumns[]>([]);
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>([]);

  const columns = useMemo<MRT_ColumnDef<CatalogColumns>[]>(
    () => [
      {
        accessorKey: 'barcode',
        header: 'Баркод',
        Footer: 'Итого:',
        Edit: ({ cell, row, column, table }) => (
          <CustomNumberInput
            cell={cell}
            row={row}
            column={column}
            table={table}
            name='barcode'
            placeholder='Баркод'
          />
        ),
      },
      {
        accessorKey: 'product_brand',
        header: 'Бренд',
      },
      {
        accessorKey: 'product_name',
        header: 'Название',
      },
      {
        accessorKey: 'product_quantity',
        header: 'Количество',
        Footer: ({ table }) => getTotal(table, 'product_quantity'),
        Edit: ({ cell, row, column, table }) => (
          <CustomNumberInput
            cell={cell}
            row={row}
            column={column}
            table={table}
            name='product_quantity'
            placeholder='Количество'
          />
        ),
      },
      {
        accessorKey: 'price',
        header: 'Цена',
        filterVariant: 'range',
        Footer: ({ table }) => getTotal(table, 'price'),
        Edit: ({ cell, row, column, table }) => (
          <CustomNumberInput
            cell={cell}
            row={row}
            column={column}
            table={table}
            name='price'
            placeholder='Цена'
          />
        ),
      },
    ],
    [],
  );

  const handleStringFiltersChange = useCallback(
    (id: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setColumnFilters((prev) => {
        const index = prev.findIndex((filter) => filter.id === id);

        if (index === -1) {
          return [...prev, { id, value: e.target.value }];
        }

        return prev.map((filter, i) =>
          i === index ? { ...filter, value: e.target.value } : filter,
        );
      }),
    [],
  );

  const handleRangeFiltersChange = useCallback(
    (id: string, type: 'min' | 'max') => (e: React.ChangeEvent<HTMLInputElement>) =>
      setColumnFilters((prev) => {
        const index = prev.findIndex((filter) => filter.id === id);

        const prevValue: [string, string] = (prev[index]?.value as
          | [string, string]
          | undefined) ?? ['', ''];

        const newValue: [string, string] =
          type === 'max' ? [prevValue[0], e.target.value] : [e.target.value, prevValue[1]];

        if (index === -1) {
          return [...prev, { id, value: newValue }];
        }

        return prev.map((filter, i) => (i === index ? { ...filter, value: newValue } : filter));
      }),
    [],
  );

  const catalogTable = useMaterialReactTable({
    columns,
    data,
    enableEditing: true,
    editDisplayMode: 'cell',
    enableStickyHeader: true,
    enableStickyFooter: true,
    enableFullScreenToggle: false,
    enableDensityToggle: false,
    enableGlobalFilter: true,
    enableColumnActions: false,
    enableFilterMatchHighlighting: false,
    enableFilters: false,
    enableSortingRemoval: false,
    onColumnFiltersChange: setColumnFilters,
    initialState: {
      density: 'compact',
    },
    state: {
      columnFilters,
    },
    muiTableBodyProps: {
      sx: {
        '& tr:nth-of-type(odd) > td': {
          backgroundColor: '#f5f5f5',
        },
      },
      // @ts-expect-error Можно добавить такой пропс
      'data-testid': 'catalog-table',
    },
    muiTablePaperProps: {
      sx: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '240px',
        mb: 1,
      },
    },
    muiTableFooterCellProps: {
      sx: {
        fontSize: '0.875rem',
        color: 'primary.main',
      },
    },
  });

  const handleExportData = useCallback(() => {
    const tableData = catalogTable
      .getSortedRowModel()
      .rows.map((row) => ({ ...row.original, ...row._valuesCache }));
    const tableJson = JSON.stringify(tableData, null, 2);
    const blob = new Blob([tableJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'catalog.json';
    link.click();
    URL.revokeObjectURL(url);
  }, [catalogTable]);

  return (
    <Stack sx={{ height: '100%' }}>
      <CatalogFilters
        handleStringFiltersChange={handleStringFiltersChange}
        handleRangeFiltersChange={handleRangeFiltersChange}
      />
      <CatalogActions setData={setData} handleExportData={handleExportData} />
      <MaterialReactTable table={catalogTable} />
    </Stack>
  );
};
