import styled from 'styled-components';
import Text from '@/components/common/Text';

function ProductCard() {
  return (
    <ProductCardWrapper>
      <ProductFigure>
        <ProductImg
          src="https://image.msscdn.net/musinsaUI/homework/data/img.jpg"
          alt="제품 사진"
        />
      </ProductFigure>
      <InfoSection>
        <Text
          contents="브랜드명"
          fontSize="small"
          styles={{ marginBottom: '8px' }}
        />
        <Text
          contents="상품명"
          fontSize="medium"
          fontWeight="large"
          styles={{ marginBottom: '4px' }}
        />
        <SaledPrice>
          <Text contents="가격" fontSize="large" fontWeight="large" />
          <Text
            contents="할인률"
            fontSize="large"
            fontWeight="large"
            color="red"
          />
        </SaledPrice>
        <Text
          contents="원가"
          fontSize="small"
          color="useless"
          styles={{ textDecoration: 'line-through' }}
        />
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
