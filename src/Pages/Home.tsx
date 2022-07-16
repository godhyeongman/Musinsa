import { useEffect, useMemo, useState, useRef } from 'react';
import styled from 'styled-components';
import {
  DefaultHeader as DefaultHeaderTemplate,
  ProductCard,
} from '@/templates';
import { ToggleStateDispatchContext } from '@/contexts/DisplayToggleProvider';
import { useNullGuardedContext } from '@/hooks/useNullGuardedContext';
import useFetchData from '@/hooks/useFetch';

const getProductCards = (
  productData: any,
  target: React.RefObject<HTMLDivElement>,
) => {
  if (!productData) {
    return;
  }

  const {
    data: { list },
  } = productData;

  const productCards = list.map((productItemData: any, idx: number) => {
    if (idx === list.length - 1) {
      return <ProductCard productData={productItemData} ref={target} />;
    }

    return <ProductCard productData={productItemData} />;
  });

  return productCards;
};

export function Home() {
  const { setFalse } = useNullGuardedContext(ToggleStateDispatchContext);
  const [endScrollCount, setEndScrollCount] = useState<number>(1);
  // const { target, productCards, setLoadMoreUrl } = useProductItem();
  const { fetchState: productsData, setLoadMoreUrl } = useFetchData(
    `${process.env.GET_PRODUCT_DATA}0.json`,
  );

  const target = useRef<HTMLDivElement>(null);
  const cards = getProductCards(productsData.payLoad, target);
  useEffect(() => {
    if (!target.current) {
      return;
    }
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setLoadMoreUrl(`${process.env.GET_PRODUCT_DATA}${endScrollCount}.json`);
        setEndScrollCount(endScrollCount + 1);
      }
    });
    observer.observe(target.current!);
    return () => observer && observer.disconnect();
  }, [productsData.payLoad]);

  return (
    <Layout
      onClick={() => {
        setFalse();
      }}
    >
      <header>
        <DefaultHeaderTemplate />
      </header>
      <main>{cards || null}</main>
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

export default Home;
