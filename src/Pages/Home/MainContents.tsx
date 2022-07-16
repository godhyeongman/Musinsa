import { ProductCard } from '@/templates/ProductCard';
import * as calcFilter from '@/business/filterProd';

type filterStateType = {
  isFilterSale: boolean | null;
  isFilterExclusive: boolean | null;
  isFilterSoldOut: boolean | null;
};

export const getProductCards = (
  productData: any,
  target: React.RefObject<HTMLDivElement>,
  filterState: filterStateType,
) => {
  if (!productData) {
    return;
  }

  const {
    data: { list },
  } = productData;

  const filterdData = getFilterdData(filterState, list);

  const productCards = filterdData.map((productItemData: any, idx: number) => {
    if (idx === filterdData.length - 1) {
      return <ProductCard productData={productItemData} ref={target} />;
    }

    return <ProductCard productData={productItemData} />;
  });

  return productCards;
};

const getFilterdData = (filterState: filterStateType, targetList: any) => {
  const filterLists = calcFilter.pipe(
    calcFilter.checkTargetState(filterState.isFilterSale!, 'isSale'),
    calcFilter.checkTargetState(filterState.isFilterExclusive!, 'isExclusive'),
    calcFilter.checkTargetState(filterState.isFilterSoldOut!, 'isSoldOut'),
  );

  const filterdData = filterLists(targetList);

  return filterdData;
};
