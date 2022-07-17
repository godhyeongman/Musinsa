import { createContext, Dispatch, useState, ReactNode } from 'react';

export const SearchProductsContext = createContext<any | null>(null);
export const SearchProductsDisPatchContext =
  createContext<Dispatch<any> | null>(null);

export function SearchProductsProvider({ children }: { children: ReactNode }) {
  const [searchedProducts, setSearchedProducts] = useState(null);

  return (
    <SearchProductsContext.Provider value={searchedProducts}>
      <SearchProductsDisPatchContext.Provider value={setSearchedProducts}>
        {children}
      </SearchProductsDisPatchContext.Provider>
    </SearchProductsContext.Provider>
  );
}
