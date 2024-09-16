import { Button, Stack } from '@mui/material';
import { RiArrowRightSLine } from 'react-icons/ri';

export const ActionButtons = () => {
  return (
    <Stack direction='row' sx={{ alignItems: 'center', gap: 1 }}>
      <Button size='small' variant='outlined'>
        Выйти
      </Button>
      <Button size='small' color='warning' variant='contained' endIcon={<RiArrowRightSLine />}>
        О нас
      </Button>
    </Stack>
  );
};
