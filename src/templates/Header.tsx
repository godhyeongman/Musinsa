import styled from 'styled-components';
import Logo from '@/assets/icons/Logo.svg';
import TabBar from '@/components/TabBar';
import Tab from '@/components/Tab';
import filterTabContents from '@/constants/FilterTabContents';

// TODO: a 태그 추후 리액트 라우터 돔을 이용하여 Link태그로 개선가능
function Header() {
  const filterTabItem = filterTabContents.map(({ contents, ownIcon }) => (
    <Tab contents={contents} Icon={ownIcon} />
  ));

  return (
    <StyledHeader>
      <a href="/">
        <Logo />
      </a>
      <TabBar>{filterTabItem}</TabBar>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 17px 0;
  background-color: ${({ theme }) => theme.color.background};
`;

export default Header;
