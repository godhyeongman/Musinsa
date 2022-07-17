import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import { Home } from '@/pages';
import { DisplayToggleProvider } from '@/contexts/DisPlayToggle/DisplayToggleProvider';
import { SearchProductsProvider } from '@/contexts/SearchProducts/SearchProductsProvider';
import { ProductsFilterProvider } from './contexts/ProductsFilter/ProductsFilterProvider';
import { GlobalStyle } from './styles/globalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProductsFilterProvider>
        <DisplayToggleProvider>
          <SearchProductsProvider>
            <Home />
          </SearchProductsProvider>
        </DisplayToggleProvider>
      </ProductsFilterProvider>
    </ThemeProvider>
  );
}

export default App;
