import { Box, Stack } from '@mui/material';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Stack direction='row' sx={{ minHeight: '100%', height: '1px' }}>
      <Sidebar />
      <Stack sx={{ flexGrow: 1, pt: 2, pl: 1, pr: 1 }}>
        <Header />
        <Box component='main' sx={{ flexGrow: 1 }}>
          {children}
        </Box>
      </Stack>
    </Stack>
  );
};
