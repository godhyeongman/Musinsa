import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import { Home } from '@/pages';
import { DisplayToggleProvider } from '@/contexts/DisplayToggleProvider';
import { GlobalStyle } from './styles/globalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <DisplayToggleProvider>
        <Home />
      </DisplayToggleProvider>
    </ThemeProvider>
  );
}

export default App;
