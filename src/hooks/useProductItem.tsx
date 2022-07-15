import { useRef } from 'react';
import { ProductCard } from '@/templates';
import useFetchData from './useFetch';

function useProductItem() {
  const productsData = useFetchData(process.env.GET_PRODUCT_DATA!);

  const target = useRef();

  if (!productsData.payLoad) {
    return { productCards: null, payLoad: null, target: null };
  }

  const {
    payLoad: {
      data: { list },
    },
  } = productsData;

  const productCards = list.map(
    (
      {
        brandLinkUrl,
        brandName,
        goodsName,
        goodsNo,
        imageUrl,
        isExclusive,
        isSale,
        isSoldOut,
        linkUrl,
        normalPrice,
        price,
        saleRate,
      }: any,
      idx: number,
    ) => {
      if (idx === list.length - 1) {
        return (
          <ProductCard
            id={goodsNo}
            brandName={brandName}
            productName={goodsName}
            saleRate={saleRate}
            isSale={isSale}
            isSoldOut={isSoldOut}
            isExclusive={isExclusive}
            currentPrice={price}
            originalPrice={normalPrice}
            imageUrl={imageUrl}
            linkUrl={linkUrl}
            brandLinkUrl={brandLinkUrl}
            key={goodsNo}
            ref={target}
          />
        );
      }

      return (
        <ProductCard
          id={goodsNo}
          brandName={brandName}
          productName={goodsName}
          saleRate={saleRate}
          isSale={isSale}
          isSoldOut={isSoldOut}
          isExclusive={isExclusive}
          currentPrice={price}
          originalPrice={normalPrice}
          imageUrl={imageUrl}
          linkUrl={linkUrl}
          brandLinkUrl={brandLinkUrl}
          key={goodsNo}
        />
      );
    },
  );
  return { productCards, target, payLoad: productsData.payLoad };
}

export default useProductItem;
