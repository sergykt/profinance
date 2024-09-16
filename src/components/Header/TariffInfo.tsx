import { Stack, Typography } from '@mui/material';
import { FaCalendarAlt } from 'react-icons/fa';

interface TariffInfoProps {
  label: string;
}

export const TariffInfo = ({ label }: TariffInfoProps) => {
  return (
    <Stack
      direction='row'
      sx={{
        p: 1.5,
        mr: 'auto',
        alignItems: 'center',
        gap: 1,
        backgroundColor: '#eef5ff',
        borderRadius: 3,
      }}
    >
      <FaCalendarAlt color='#287eff' />
      <Typography sx={{ color: 'primary.main' }}>{label}</Typography>
    </Stack>
  );
};
