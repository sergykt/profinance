import { Input } from '@mui/material';
import {
  type MRT_Column,
  type MRT_Row,
  type MRT_TableInstance,
  type MRT_Cell,
  type MRT_RowData,
} from 'material-react-table';

interface CustomNumberInputProps<T extends MRT_RowData> {
  cell: MRT_Cell<T, unknown>;
  row: MRT_Row<T>;
  column: MRT_Column<T, unknown>;
  table: MRT_TableInstance<T>;
  name: string;
  placeholder: string;
}

export const CustomNumberInput = <T extends MRT_RowData>(props: CustomNumberInputProps<T>) => {
  const { cell, row, column, table, name, placeholder } = props;

  const initialValue = cell.getValue();
  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    const columnId = column.id as keyof T & string;
    if (!Number.isNaN(value) && value >= 0) {
      row._valuesCache[columnId] = value;
    }
    table.setEditingCell(null);
  };

  return (
    <Input
      autoFocus
      onBlur={onBlur}
      defaultValue={initialValue}
      placeholder={placeholder}
      name={name}
    />
  );
};
