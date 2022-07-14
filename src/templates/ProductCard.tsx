import styled from 'styled-components';
import * as Product from '@/components/product';
import React from 'react';

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

function ProductCard({
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
}: Partial<ProductCardProps>) {
  return (
    <ProductCardWrapper key={id}>
      <ProductFigure>
        <ProductImg src={imageUrl} alt="제품 사진" onError={onErrorImg} />
      </ProductFigure>
      <InfoSection>
        <Product.BrandNameText name={brandName} />
        <Product.ProductNameText name={productName} />
        <SaledPrice>
          <Product.CurrentPriceText price={currentPrice} />
          <Product.DiscountRateText discountRate={saleRate} />
        </SaledPrice>
        <Product.OriginalPriceText originalPrice={originalPrice} />
      </InfoSection>
    </ProductCardWrapper>
  );
}

const onErrorImg = (e: React.SyntheticEvent<any, Event>) => {
  e.currentTarget.src =
    'https://image.msscdn.net/musinsaUI/homework/data/img.jpg';
};

const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

const ProductFigure = styled.figure`
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

export default ProductCard;
