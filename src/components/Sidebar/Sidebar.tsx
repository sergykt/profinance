import { Box, Button } from '@mui/material';
import { AiFillMessage } from 'react-icons/ai';
import { SidebarMenu } from './SideBarMenu';
import { SidebarHeader } from './SidebarHeader';
import { SupportInfo } from './SupportInfo';
import { LegalLinks } from './LegalLinks';

export const Sidebar = () => {
  return (
    <Box component='aside' sx={{ pt: 2, pb: 2, pl: 2, pr: 2, maxWidth: '20rem' }}>
      <Box
        sx={{
          mb: 1,
          p: 1.5,
          borderRadius: 3,
          backgroundColor: '#171d2c',
          color: 'primary.contrastText',
        }}
      >
        <SidebarHeader />
        <SidebarMenu />
      </Box>
      <Box
        sx={{
          p: 2,
          mb: 1,
          borderRadius: 3,
          backgroundColor: '#171d2c',
          color: 'primary.contrastText',
        }}
      >
        <SupportInfo />
        <LegalLinks />
      </Box>
      <Button variant='contained' sx={{ width: '100%', p: 2 }} startIcon={<AiFillMessage />}>
        Связаться с нами
      </Button>
    </Box>
  );
};
