export type ProductsFilterStateType = {
  isFilterSale: boolean | null;
  isFilterExclusive: boolean | null;
  isFilterSoldOut: boolean | null;
};

export type ProductsFliterAction =
  | { type: 'CLICKED_SALE' }
  | { type: 'CLICKED_EXCLUSIVE' }
  | { type: 'CLICKED_SOLD_OUT' }
  | { type: 'RESET' };

export type ActionIncomeType =
  | 'CLICKED_SALE'
  | 'CLICKED_EXCLUSIVE'
  | 'CLICKED_SOLD_OUT'
  | 'RESET';
