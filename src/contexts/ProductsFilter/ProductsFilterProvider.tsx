import React, {
  createContext,
  ReactNode,
  useReducer,
  Dispatch,
  useState,
} from 'react';
import * as CONSTANTS from '@/constants/ProductsFilterinitial';
import * as TYPE from './types';
import { filterProductsReducer } from './reducers';

export const ProductsFilterContext =
  createContext<TYPE.ProductsFilterStateType | null>(null);
export const ProductsFilterDispatchContext =
  createContext<Dispatch<TYPE.ProductsFliterAction> | null>(null);

export const FilterdProductsContext = createContext<any>(null);
export const FilterdProductsDispatchContext =
  createContext<React.Dispatch<any> | null>(null);

export function ProductsFilterProvider({ children }: { children: ReactNode }) {
  const [filteringState, filteringDispatch] = useReducer(
    filterProductsReducer,
    CONSTANTS.initialState,
  );
  const [filterdData, setFilterdData] = useState<any>(null);

  return (
    <ProductsFilterContext.Provider value={filteringState}>
      <FilterdProductsContext.Provider value={filterdData}>
        <ProductsFilterDispatchContext.Provider value={filteringDispatch}>
          <FilterdProductsDispatchContext.Provider value={setFilterdData}>
            {children}
          </FilterdProductsDispatchContext.Provider>
        </ProductsFilterDispatchContext.Provider>
      </FilterdProductsContext.Provider>
    </ProductsFilterContext.Provider>
  );
}
