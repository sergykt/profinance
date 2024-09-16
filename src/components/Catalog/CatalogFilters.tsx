import { memo } from 'react';
import { Box, Stack } from '@mui/material';
import { Filter } from './Filter';

interface CatalogFiltersProps {
  handleStringFiltersChange: (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRangeFiltersChange: (
    id: string,
    type: 'min' | 'max',
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CatalogFilters = memo((props: CatalogFiltersProps) => {
  const { handleStringFiltersChange, handleRangeFiltersChange } = props;

  return (
    <Box sx={{ p: 2 }}>
      <Stack direction='row' sx={{ gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
        <Filter
          label='Баркод'
          placeholder='56432421343'
          onChange={handleStringFiltersChange('barcode')}
        />
        <Filter
          label='Бренд'
          placeholder='Samsung'
          onChange={handleStringFiltersChange('product_brand')}
        />
        <Filter
          label='Название'
          placeholder='Galaxy M30s'
          onChange={handleStringFiltersChange('product_name')}
        />
        <Filter
          label='Цена мин.'
          placeholder='от 100'
          onChange={handleRangeFiltersChange('price', 'min')}
          inputType='number'
          width='6rem'
        />
        <Filter
          label='Цена макс.'
          placeholder='до 200'
          onChange={handleRangeFiltersChange('price', 'max')}
          inputType='number'
          width='6rem'
        />
      </Stack>
    </Box>
  );
});
