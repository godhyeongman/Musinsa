import styled from 'styled-components';
import * as Product from '@/components/product';

type ProductCardProps = {
  id: number;
  brandName: string;
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
  imageUrl,
  linkUrl,
  brandLinkUrl,
  isSale,
  isSoldOut,
  isExclusive,
  saleRate,
}: Partial<ProductCardProps>) {
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
        <Product.ProductNameText name="상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명" />
        <SaledPrice>
          <Product.CurrentPriceText price="dummy" />
          <Product.DiscountRateText discountRate="333333" />
        </SaledPrice>
        <Product.OriginalPriceText originalPrice="dummy" />
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
  flex-wrap: wrap;
  padding: 20px 10px;
`;

const SaledPrice = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default ProductCard;
