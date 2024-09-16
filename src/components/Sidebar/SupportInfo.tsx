import { Box, Stack, Typography } from '@mui/material';

const supportInfo = [
  { label: 'Номер поддержки', value: '8 (999) 999 99-99' },
  { label: 'Почта поддержки', value: 'pf1@werthesest@.ru' },
  { label: 'Часы работы', value: 'Пн-Пт с 09:00 до 19:00 мск' },
];

export const SupportInfo = () => {
  return (
    <>
      <Typography sx={{ fontSize: '0.875rem', pb: 2, pt: 1 }}>Техническая поддержка</Typography>
      <Stack
        direction='row'
        sx={{ pb: 2, alignItems: 'center', columnGap: 2, rowGap: 1, flexWrap: 'wrap' }}
      >
        {supportInfo.map((info) => (
          <Box key={info.label}>
            <Typography sx={{ fontSize: '0.75rem', color: '#657193' }}>{info.label}</Typography>
            <Typography sx={{ fontSize: '0.875rem' }}>{info.value}</Typography>
          </Box>
        ))}
      </Stack>
    </>
  );
};
