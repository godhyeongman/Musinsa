import React from 'react';
import styled from 'styled-components';
import { DefaultHeader as DefaultHeaderTemplate } from '@/templates';
import { DisplayToggleProvider } from '@/contexts/DisplayToggleProvider';

function Home() {
  return (
    <DisplayToggleProvider>
      <Layout>
        <header>
          <DefaultHeaderTemplate />
        </header>
      </Layout>
    </DisplayToggleProvider>
  );
}

const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 375px;
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
`;

export default React.memo(Home);
