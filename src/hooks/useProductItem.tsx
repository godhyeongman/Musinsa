import { useRef } from 'react';
import { ProductCard } from '@/templates';
import useFetchData from './useFetch';

function useProductItem() {
  const { fetchState: productsData, setLoadMoreUrl } = useFetchData(
    `${process.env.GET_PRODUCT_DATA}0.json`,
  );

  const target = useRef<HTMLDivElement>(null);

  if (!productsData.payLoad) {
    return { productCards: null, payLoad: null, target: null };
  }

  const {
    payLoad: {
      data: { list },
    },
  } = productsData;

  const productCards = list.map((productItemData: any, idx: number) => {
    if (idx === list.length - 1) {
      return <ProductCard productData={productItemData} ref={target} />;
    }

    return <ProductCard productData={productItemData} />;
  });

  return { productCards, target, setLoadMoreUrl };
}

export default useProductItem;
