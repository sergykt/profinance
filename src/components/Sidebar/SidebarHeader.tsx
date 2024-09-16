import { Button, Stack, Typography } from '@mui/material';
import { IoIosClose } from 'react-icons/io';

export const SidebarHeader = () => {
  return (
    <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
      <Typography>ФИН Контроль</Typography>
      <Button
        size='small'
        color='secondary'
        variant='contained'
        sx={{ color: '#657193' }}
        endIcon={<IoIosClose />}
      >
        Меню
      </Button>
    </Stack>
  );
};
