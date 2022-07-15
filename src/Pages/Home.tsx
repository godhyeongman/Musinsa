import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  DefaultHeader as DefaultHeaderTemplate,
  ProductCard,
} from '@/templates';
import { ToggleStateDispatchContext } from '@/contexts/DisplayToggleProvider';
import { useNullGuardedContext } from '@/hooks/useNullGuardedContext';
import useFetchData from '@/hooks/useFetch';

export function Home() {
  const { setFalse } = useNullGuardedContext(ToggleStateDispatchContext);
  const productsData = useFetchData(process.env.GET_PRODUCT_DATA);

  let test;

  if (productsData.payLoad) {
    const {
      payLoad: {
        data: { list },
      },
    } = productsData;

    test = list.map(
      ({
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
      }: any) => (
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
      ),
    );
  }

  return (
    <Layout
      onClick={() => {
        setFalse();
      }}
    >
      <header>
        <DefaultHeaderTemplate />
      </header>
      <main>{test}</main>
    </Layout>
  );
}

const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 380px;
  background-color: ${({ theme }) => theme.color.background};

  header {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 17px 0;
    background-color: ${({ theme }) => theme.color.background};
    z-index: 1000;
  }

  main {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 107.5px;
    width: 384px;
    background-color: ${({ theme }) => theme.color.background};
  }
`;

export default React.memo(Home);
