import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import { Home } from '@/pages';
import { DisplayToggleProvider } from '@/contexts/DisPlayToggle/DisplayToggleProvider';
import { ProductsFilterProvider } from './contexts/ProductsFilter/ProductsFilterProvider';
import { GlobalStyle } from './styles/globalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProductsFilterProvider>
        <DisplayToggleProvider>
          <Home />
        </DisplayToggleProvider>
      </ProductsFilterProvider>
    </ThemeProvider>
  );
}

export default App;
