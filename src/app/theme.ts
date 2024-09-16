import createTheme from '@mui/material/styles/createTheme';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#287eff',
      contrastText: '#fff',
    },
    secondary: {
      main: '#283047',
      contrastText: '#fff',
    },
    background: {
      default: '#eff1f2',
      paper: '#fff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '12px',
        },
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
});
