import styled from 'styled-components';
import { Header } from '@/templates';

function Home() {
  return (
    <Layout>
      <Header />
    </Layout>
  );
}

const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 375px;
  background-color: ${({ theme }) => theme.color.background};
`;

export default Home;
