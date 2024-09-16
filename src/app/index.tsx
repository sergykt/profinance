import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { AppRouter } from './router';
import { theme } from './theme';
import './index.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
