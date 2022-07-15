import styled from 'styled-components';
import * as Product from '@/components/product';
import React, { forwardRef } from 'react';

type ProductCardProps = {
  id: number;
  brandName: string;
  productName: string;
  originalPrice: number;
  currentPrice: number;
  imageUrl: string;
  linkUrl: string;
  brandLinkUrl: string;
  isSale: boolean;
  isSoldOut: boolean;
  isExclusive: boolean;
  saleRate: number;
};

function ProductCard(
  {
    id,
    brandName,
    productName,
    originalPrice,
    currentPrice,
    imageUrl,
    linkUrl,
    brandLinkUrl,
    isSale,
    isSoldOut,
    isExclusive,
    saleRate,
  }: ProductCardProps,
  ref,
) {
  const saledItemInfo = (
    <>
      <a href={brandLinkUrl}>
        <Product.BrandNameText name={brandName} />
      </a>
      <a href={linkUrl}>
        <Product.ProductNameText name={productName} />
      </a>
      <SaledPrice>
        <Product.CurrentPriceText price={currentPrice.toLocaleString()} />
        <Product.DiscountRateText discountRate={`${saleRate}`} />
      </SaledPrice>
      <Product.OriginalPriceText
        originalPrice={originalPrice.toLocaleString()}
      />
    </>
  );

  const noneSaledItemInfo = (
    <>
      <a href={brandLinkUrl}>
        <Product.BrandNameText name={brandName} />
      </a>
      <a href={linkUrl}>
        <Product.ProductNameText name={productName} />
      </a>
      <SaledPrice>
        <Product.CurrentPriceText price={originalPrice.toLocaleString()} />
      </SaledPrice>
    </>
  );

  return (
    <ProductCardWrapper key={id} ref={ref}>
      <ProductFigure>
        <ProductImg src={imageUrl} alt="제품 사진" onError={onErrorImg} />
        <Product.ExclusiveItemBadge isExclusive={isExclusive} />
      </ProductFigure>
      <InfoSection>{isSale ? saledItemInfo : noneSaledItemInfo}</InfoSection>
    </ProductCardWrapper>
  );
}

const onErrorImg = (e: React.SyntheticEvent<any, Event>) => {
  e.currentTarget.src = process.env.GET_BASE_IMG;
};

const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

const ProductFigure = styled.figure`
  position: relative;
  width: 190px;
  height: 200px;
`;

const ProductImg = styled.img`
  object-fit: cover;
`;

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px 10px;
`;

const SaledPrice = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default forwardRef<React.MutableRefObject<undefined>, ProductCardProps>(
  ProductCard,
);
