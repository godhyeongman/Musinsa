import { useEffect, useState, useRef, useContext } from 'react';
import styled from 'styled-components';
import { DefaultHeader as DefaultHeaderTemplate } from '@/templates';
import { ToggleStateDispatchContext } from '@/contexts/DisPlayToggle/DisplayToggleProvider';
import {
  ProductsFilterContext,
  FilterdProductsDispatchContext,
} from '@/contexts/ProductsFilter/ProductsFilterProvider';
import { SearchProductsContext } from '@/contexts/SearchProducts/SearchProductsProvider';
import { useNullGuardedContext } from '@/hooks/useNullGuardedContext';
import useFetchData from '@/hooks/useFetch';
import { getProductCards, getFilterdData } from './MainContents';
import { onInterSect } from './handler';

export function Home() {
  const target = useRef<HTMLDivElement>(null);
  const { setFalse } = useNullGuardedContext(ToggleStateDispatchContext);
  const fitlerState = useNullGuardedContext(ProductsFilterContext);
  const setFilterdData = useNullGuardedContext(FilterdProductsDispatchContext);
  const [endScrollCount, setEndScrollCount] = useState<number>(1);
  const { fetchState: productsData, setLoadMoreUrl } = useFetchData(
    `${process.env.GET_PRODUCT_DATA}0.json`,
  );
  const SearchedProducts = useContext(SearchProductsContext);

  const filterdData = productsData.payLoad
    ? getFilterdData(
        fitlerState,
        productsData.payLoad.data.list,
        SearchedProducts,
      )
    : null;

  setFilterdData(filterdData);

  const cards = productsData.payLoad
    ? getProductCards(filterdData, target)
    : null;

  const empty = productsData.Error ? <div>더이상 제품이 없습니다.</div> : null;

  useEffect(() => {
    onInterSect(target, setLoadMoreUrl, setEndScrollCount, endScrollCount);
  }, [productsData.payLoad, fitlerState]);

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
      {empty}
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
