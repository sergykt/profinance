import { memo } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { PiNotebookFill } from 'react-icons/pi';

export const CatalogHeader = memo(() => {
  return (
    <Stack direction='row' sx={{ pt: 3, pb: 1, gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
      <Typography sx={{ fontSize: '1.5rem' }}>Остатки сформированы на 01.04.2023 г.</Typography>
      <Button size='small' color='secondary' variant='contained' startIcon={<PiNotebookFill />}>
        Инструкции
      </Button>
    </Stack>
  );
});
