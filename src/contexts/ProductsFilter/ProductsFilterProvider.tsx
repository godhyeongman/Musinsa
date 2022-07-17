import { createContext, ReactNode, useReducer, Dispatch } from 'react';
import * as CONSTANTS from '@/constants/ProductsFilterinitial';
import * as TYPE from './types';
import { filterProductsReducer } from './reducers';

export const ProductsFilterContext =
  createContext<TYPE.ProductsFilterStateType | null>(null);
export const ProductsFilterDispatchContext =
  createContext<Dispatch<TYPE.ProductsFliterAction> | null>(null);

export function ProductsFilterProvider({ children }: { children: ReactNode }) {
  const [filteringState, filteringDispatch] = useReducer(
    filterProductsReducer,
    CONSTANTS.initialState,
  );

  return (
    <ProductsFilterContext.Provider value={filteringState}>
      <ProductsFilterDispatchContext.Provider value={filteringDispatch}>
        {children}
      </ProductsFilterDispatchContext.Provider>
    </ProductsFilterContext.Provider>
  );
}
