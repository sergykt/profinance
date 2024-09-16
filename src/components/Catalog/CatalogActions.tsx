import { memo } from 'react';
import { Box, Button, Stack } from '@mui/material';
import { IoIosClose } from 'react-icons/io';
import { RiFileEditFill } from 'react-icons/ri';
import { BiSolidFileExport, BiSolidFileImport } from 'react-icons/bi';
import { type CatalogColumns } from './types';
import jsonData from '../../../data/data.json';

interface CatalogActionsProps {
  setData: React.Dispatch<React.SetStateAction<CatalogColumns[]>>;
  handleExportData: () => void;
}

export const CatalogActions = memo((props: CatalogActionsProps) => {
  const { setData, handleExportData } = props;

  const handleImportData = () => {
    setData(jsonData as CatalogColumns[]);
  };

  const resetData = () => {
    setData([]);
  };

  return (
    <>
      <Button
        variant='contained'
        color='secondary'
        startIcon={<BiSolidFileExport />}
        sx={{ ml: 2, mr: 2, alignSelf: 'flex-start' }}
        onClick={handleExportData}
      >
        Экспорт
      </Button>
      <Stack
        direction='row'
        sx={{
          pt: 0.5,
          pb: 0.5,
          m: 2,
          gap: 1,
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '50rem',
          borderTop: '1px solid #d7dade',
          borderBottom: '1px solid #d7dade',
        }}
      >
        <Stack direction='row' sx={{ gap: 1, flexWrap: 'wrap' }}>
          <Button
            startIcon={<BiSolidFileImport />}
            sx={{ color: 'text.primary' }}
            size='small'
            onClick={handleImportData}
          >
            Загрузить данные
          </Button>
          <Button startIcon={<RiFileEditFill />} sx={{ color: 'text.primary' }} size='small'>
            Изменить данные
          </Button>
        </Stack>
        <Box sx={{ borderLeft: '1px solid #d7dade' }}>
          <Button
            endIcon={<IoIosClose />}
            sx={{ color: 'text.primary' }}
            size='small'
            onClick={resetData}
          >
            Очистить
          </Button>
        </Box>
      </Stack>
    </>
  );
});
