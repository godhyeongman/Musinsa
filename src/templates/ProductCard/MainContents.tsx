import styled from 'styled-components';
import * as Product from '@/components/product';

export const saledItemInfo = ({
  brandLinkUrl,
  linkUrl,
  brandName,
  goodsName,
  saleRate,
  normalPrice,
  price,
}: ItemInfoProps) => (
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
    <Product.OriginalPriceText originalPrice={normalPrice.toLocaleString()} />
  </>
);

export const noneSaledItemInfo = ({
  brandLinkUrl,
  brandName,
  linkUrl,
  goodsName,
  normalPrice,
}: ItemInfoProps) => (
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

type ItemInfoProps = {
  brandLinkUrl: string;
  linkUrl: string;
  brandName: string;
  goodsName: string;
  saleRate: number;
  normalPrice: number;
  price: number;
};

const SaledPrice = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
