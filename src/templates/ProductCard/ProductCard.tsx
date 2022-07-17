import styled from 'styled-components';
import * as Product from '@/components/product';
import React, { forwardRef } from 'react';
import { noneSaledItemInfo, saledItemInfo } from './MainContents';

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

    const NoneSaledItemInfo = noneSaledItemInfo({
      brandName,
      goodsName,
      normalPrice,
      linkUrl,
      brandLinkUrl,
      saleRate,
      price,
    });
    const SaledItemInfo = saledItemInfo({
      brandName,
      goodsName,
      normalPrice,
      linkUrl,
      brandLinkUrl,
      saleRate,
      price,
    });

    return (
      <ProductCardWrapper key={goodsNo} ref={ref}>
        <ProductFigure isSoldOut={isSoldOut}>
          <ProductImg src={imageUrl} alt="제품 사진" onError={onErrorImg} />
          <Product.ExclusiveItemBadge isExclusive={isExclusive} />
        </ProductFigure>
        <InfoSection>{isSale ? SaledItemInfo : NoneSaledItemInfo}</InfoSection>
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

const ProductFigure = styled.figure<{ isSoldOut: boolean }>`
  position: relative;
  width: 190px;
  height: 200px;
  opacity: ${({ isSoldOut }) => (isSoldOut ? '0.4' : 'none')};
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
