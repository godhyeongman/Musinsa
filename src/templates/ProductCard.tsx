import styled from 'styled-components';
import * as Product from '@/components/product';
import React, { forwardRef } from 'react';

type ProductDataProps = {
  goodsNo: number;
  brandName: string;
  goodsName: string;
  normalPrice: number;
  price: number;
  imageUrl: string;
  linkUrl: string;
  brandLinkUrl: string;
  isSale: boolean;
  isSoldOut: boolean;
  isExclusive: boolean;
  saleRate: number;
};

export const ProductCard = forwardRef(
  (
    { productData }: { productData: ProductDataProps },
    ref: React.Ref<HTMLDivElement>,
  ) => {
    const {
      goodsNo,
      brandName,
      goodsName,
      normalPrice,
      price,
      imageUrl,
      linkUrl,
      brandLinkUrl,
      isSale,
      isSoldOut,
      isExclusive,
      saleRate,
    } = productData;

    const saledItemInfo = (
      <>
        <a href={brandLinkUrl}>
          <Product.BrandNameText name={brandName} />
        </a>
        <a href={linkUrl}>
          <Product.ProductNameText name={goodsName} />
        </a>
        <SaledPrice>
          <Product.CurrentPriceText price={price.toLocaleString()} />
          <Product.DiscountRateText discountRate={`${saleRate}`} />
        </SaledPrice>
        <Product.OriginalPriceText
          originalPrice={normalPrice.toLocaleString()}
        />
      </>
    );

    const noneSaledItemInfo = (
      <>
        <a href={brandLinkUrl}>
          <Product.BrandNameText name={brandName} />
        </a>
        <a href={linkUrl}>
          <Product.ProductNameText name={goodsName} />
        </a>
        <SaledPrice>
          <Product.CurrentPriceText price={normalPrice.toLocaleString()} />
        </SaledPrice>
      </>
    );

    return (
      <ProductCardWrapper key={goodsNo} ref={ref}>
        <ProductFigure>
          <ProductImg src={imageUrl} alt="제품 사진" onError={onErrorImg} />
          <Product.ExclusiveItemBadge isExclusive={isExclusive} />
        </ProductFigure>
        <InfoSection>{isSale ? saledItemInfo : noneSaledItemInfo}</InfoSection>
      </ProductCardWrapper>
    );
  },
);

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
