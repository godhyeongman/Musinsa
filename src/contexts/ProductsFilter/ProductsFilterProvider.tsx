import { createContext, ReactNode, useReducer, Dispatch } from 'react';

export const ProductsFilterContext =
  createContext<ProductsFilterStateType | null>(null);
export const ProductsFilterDispatchContext =
  createContext<Dispatch<ProductsFliterAction> | null>(null);

type ProductsFilterStateType = {
  isFilterSale: boolean | null;
  isFilterExclusive: boolean | null;
  isFilterSoldOut: boolean | null;
};

type ProductsFliterAction =
  | { type: 'CLICKED_SALE' }
  | { type: 'CLICKED_EXCLUSIVE' }
  | { type: 'CLICKED_SOLD_OUT' }
  | { type: 'RESET' };

const initialState = {
  isFilterSale: null,
  isFilterExclusive: null,
  isFilterSoldOut: null,
};

export const filterProductsReducer = (
  state: ProductsFilterStateType,
  action: ProductsFliterAction,
) => {
  switch (action.type) {
    case 'CLICKED_SALE':
      return { ...state, isFilterSale: state.isFilterSale ? null : true };

    case 'CLICKED_EXCLUSIVE':
      return {
        ...state,
        isFilterExclusive: !state.isFilterExclusive ? null : true,
      };

    case 'CLICKED_SOLD_OUT':
      return {
        ...state,
        isFilterSoldOut: !state.isFilterSoldOut ? null : true,
      };

    case 'RESET':
      return { ...initialState };

    default:
      throw new Error(`잘못된 달력 액션입니다. actionType: ${action}`);
  }
};

export function ProductsFilterProvider({ children }: { children: ReactNode }) {
  const [filteringState, filteringDispatch] = useReducer(
    filterProductsReducer,
    initialState,
  );

  return (
    <ProductsFilterContext.Provider value={filteringState}>
      <ProductsFilterDispatchContext.Provider value={filteringDispatch}>
        {children}
      </ProductsFilterDispatchContext.Provider>
    </ProductsFilterContext.Provider>
  );
}
