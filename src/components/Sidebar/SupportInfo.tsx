import { Box, Stack, Typography } from '@mui/material';

const supportInfo = [
  { title: 'Номер поддержки', value: '8 (999) 999 99-99' },
  { title: 'Почта поддержки', value: 'pf1@werthesest@.ru' },
  { title: 'Часы работы', value: 'Пн-Пт с 09:00 до 19:00 мск' },
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
          <Box key={info.title}>
            <Typography sx={{ fontSize: '0.75rem', color: '#657193' }}>{info.title}</Typography>
            <Typography sx={{ fontSize: '0.875rem' }}>{info.value}</Typography>
          </Box>
        ))}
      </Stack>
    </>
  );
};
