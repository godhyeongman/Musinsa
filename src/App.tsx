import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import { Home } from '@/pages';
import { GlobalStyle } from './styles/globalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
