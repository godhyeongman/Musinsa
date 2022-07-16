import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import {
  DefaultHeader as DefaultHeaderTemplate,
  ProductCard,
} from '@/templates';
import { ToggleStateDispatchContext } from '@/contexts/DisPlayToggle/DisplayToggleProvider';
import { ProductsFilterContext } from '@/contexts/ProductsFilter/ProductsFilterProvider';
import { useNullGuardedContext } from '@/hooks/useNullGuardedContext';
import useFetchData from '@/hooks/useFetch';
import * as calcFilter from '@/business/filterProd';

const getProductCards = (
  productData: any,
  target: React.RefObject<HTMLDivElement>,
  filterState: {
    isFilterSale: boolean | null;
    isFilterExclusive: boolean | null;
    isFilterSoldOut: boolean | null;
  },
) => {
  if (!productData) {
    return;
  }

  const {
    data: { list },
  } = productData;

  const filterLists = calcFilter.pipe(
    calcFilter.checkTargetState(filterState.isFilterSale!, 'isSale'),
    calcFilter.checkTargetState(filterState.isFilterExclusive!, 'isExclusive'),
    calcFilter.checkTargetState(filterState.isFilterSoldOut!, 'isSoldOut'),
  );

  const filterdData = filterLists(list);

  const productCards = filterdData.map((productItemData: any, idx: number) => {
    if (idx === filterdData.length - 1) {
      return <ProductCard productData={productItemData} ref={target} />;
    }

    return <ProductCard productData={productItemData} />;
  });

  return productCards;
};

export function Home() {
  const { setFalse } = useNullGuardedContext(ToggleStateDispatchContext);
  const fitlerState = useNullGuardedContext(ProductsFilterContext);
  const [endScrollCount, setEndScrollCount] = useState<number>(1);
  const { fetchState: productsData, setLoadMoreUrl } = useFetchData(
    `${process.env.GET_PRODUCT_DATA}0.json`,
  );

  const target = useRef<HTMLDivElement>(null);
  const cards = getProductCards(productsData.payLoad, target, fitlerState);

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
      <main>{cards}</main>
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
