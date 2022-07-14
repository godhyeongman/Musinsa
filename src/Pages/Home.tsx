import React from 'react';
import styled from 'styled-components';
import {
  DefaultHeader as DefaultHeaderTemplate,
  ProductCard,
} from '@/templates';
import { ToggleStateDispatchContext } from '@/contexts/DisplayToggleProvider';
import { useNullGuardedContext } from '@/hooks/useNullGuardedContext';

export function Home() {
  const { setFalse } = useNullGuardedContext(ToggleStateDispatchContext);

  return (
    <Layout
      onClick={() => {
        setFalse();
      }}
    >
      <header>
        <DefaultHeaderTemplate />
      </header>
      <main>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </main>
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
