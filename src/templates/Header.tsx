import styled from 'styled-components';
import Logo from '@/assets/icons/Logo.svg';
import Search from '@/assets/icons/Search.svg';
import TabBar from '@/components/TabBar';
import TabButton from '@/components/TabButton';

// TODO: a 태그 추후 리액트 라우터 돔을 이용하여 Link태그로변경 가능
function Header() {
  return (
    <StyledHeader>
      <a href="/">
        <Logo />
      </a>
      <TabBar>
        <TabButton contents="테스트" icon={<Search />} />
      </TabBar>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 17px 0;
`;

export default Header;
