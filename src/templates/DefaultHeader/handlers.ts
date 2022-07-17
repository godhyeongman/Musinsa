import { Dispatch } from 'react';
import { ProductsFliterAction } from '@/contexts/ProductsFilter/types';

export const toggleFilterInput = (
  e: React.MouseEvent<HTMLElement>,
  currentDisplayState: boolean,
  setToggleState: Dispatch<boolean>,
) => {
  e.stopPropagation();
  setToggleState(currentDisplayState);
};

export const handleFilterTab = (
  actionType:
    | 'CLICKED_SALE'
    | 'CLICKED_EXCLUSIVE'
    | 'CLICKED_SOLD_OUT'
    | 'RESET',
  dispatchFilterAction: Dispatch<ProductsFliterAction>,
) => {
  const action = { type: actionType };
  dispatchFilterAction(action);
};
