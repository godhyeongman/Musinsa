import * as CONSTANT from '@/constants/ProductsFilterinitial';
import * as TYPE from './types';

export const filterProductsReducer = (
  state: TYPE.ProductsFilterStateType,
  action: TYPE.ProductsFliterAction,
) => {
  switch (action.type) {
    case 'CLICKED_SALE':
      return { ...state, isFilterSale: state.isFilterSale ? null : true };

    case 'CLICKED_EXCLUSIVE':
      return {
        ...state,
        isFilterExclusive: state.isFilterExclusive ? null : true,
      };

    case 'CLICKED_SOLD_OUT':
      return {
        ...state,
        isFilterSoldOut: !state.isFilterSoldOut,
      };

    case 'RESET':
      return { ...CONSTANT.initialState };

    default:
      throw new Error(`잘못된 달력 액션입니다. actionType: ${action}`);
  }
};
