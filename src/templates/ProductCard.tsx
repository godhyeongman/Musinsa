import styled from 'styled-components';
import * as Product from '@/components/product';

function ProductCard() {
  const testPrice = 10000000;

  return (
    <ProductCardWrapper>
      <ProductFigure>
        <ProductImg
          src="https://image.msscdn.net/musinsaUI/homework/data/img.jpg"
          alt="제품 사진"
        />
      </ProductFigure>
      <InfoSection>
        <Product.BrandNameText name="브랜드 이름" />
        <Product.ProductNameText name="상품명" />
        <SaledPrice>
          <Product.CurrentPriceText price={testPrice.toLocaleString()} />
          <Product.DiscountRateText discountRate={String(30)} />
        </SaledPrice>
        <Product.OriginalPriceText originalPrice={testPrice.toLocaleString()} />
      </InfoSection>
    </ProductCardWrapper>
  );
}

const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

const ProductFigure = styled.figure``;

const ProductImg = styled.img``;

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
`;

const SaledPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default ProductCard;
