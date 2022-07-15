import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DefaultHeader as DefaultHeaderTemplate } from '@/templates';
import { ToggleStateDispatchContext } from '@/contexts/DisplayToggleProvider';
import { useNullGuardedContext } from '@/hooks/useNullGuardedContext';
import useProductItem from '@/hooks/useProductItem';

export function Home() {
  const { setFalse } = useNullGuardedContext(ToggleStateDispatchContext);
  const [endScrollCount, setEndScrollCount] = useState<number>(1);
  const { target, productCards, setLoadMoreUrl } = useProductItem();

  const callBack = entries => {
    if (entries[endScrollCount - 1].isIntersecting) {
      setEndScrollCount(endScrollCount + 1);

      console.log(endScrollCount);
      setLoadMoreUrl(`${process.env.GET_PRODUCT_DATA}${endScrollCount}.json`);
      return endScrollCount;
    }
  };

  useEffect(() => {
    if (!target) {
      return;
    }
    const observer = new IntersectionObserver(callBack);
    observer.observe(target.current!);
  }, [target]);

  return (
    <Layout
      onClick={() => {
        setFalse();
      }}
    >
      <header>
        <DefaultHeaderTemplate />
      </header>
      <main>{productCards || null}</main>
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
