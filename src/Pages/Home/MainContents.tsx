import { ProductCard } from '@/templates/ProductCard/ProductCard';
import * as calcFilter from '@/business/filterProd';

type filterStateType = {
  isFilterSale: boolean | null;
  isFilterExclusive: boolean | null;
  isFilterSoldOut: boolean | null;
};

export const getProductCards = (
  productData: any,
  target: React.RefObject<HTMLDivElement>,
) => {
  if (!productData) {
    return;
  }

  const productCards = productData.map((productItemData: any, idx: number) => {
    if (idx === productData.length - 1) {
      return <ProductCard productData={productItemData} ref={target} />;
    }

    return <ProductCard productData={productItemData} />;
  });

  return productCards;
};

export const getFilterdData = (
  filterState: filterStateType,
  targetList: any,
  searchedProducts: any,
) => {
  const filterLists = calcFilter.pipe(
    calcFilter.checkTargetState(filterState.isFilterSale!, 'isSale'),
    calcFilter.checkTargetState(filterState.isFilterExclusive!, 'isExclusive'),
    calcFilter.checkTargetState(filterState.isFilterSoldOut!, 'isSoldOut'),
    calcFilter.checkSearchState(searchedProducts),
  );

  const filterdData = filterLists(targetList);

  return filterdData;
};
