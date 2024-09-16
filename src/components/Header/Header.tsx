import { Box, Paper, Stack } from '@mui/material';
import { AvatarSection } from './AvatarSection';
import { ActionButtons } from './ActionButtons';
import { TariffInfo } from './TariffInfo';

export const Header = () => {
  return (
    <Box component='header' sx={{ pb: 1 }}>
      <Paper elevation={1} sx={{ borderRadius: 3, maxWidth: '60rem' }}>
        <Stack
          direction='row'
          sx={{ alignItems: 'center', flexWrap: 'wrap', gap: 1, pl: 1.5, pr: 1.5, pt: 1, pb: 1 }}
        >
          <AvatarSection
            name='Иванов И.И.'
            avatarUrl='https://mui.com/static/images/avatar/1.jpg'
          />
          <TariffInfo label='Тариф до 15.04.2024' />
          <ActionButtons />
        </Stack>
      </Paper>
    </Box>
  );
};
