import styled from 'styled-components';
import Logo from '@/assets/icons/Logo.svg';
import TabBar from '@/components/TabBar';
import Tab from '@/components/Tab';
import filterTabContents from '@/constants/FilterTabContents';

// TODO: a 태그 추후 리액트 라우터 돔을 이용하여 Link태그로 개선가능
function DefaultHeader() {
  const filterTabItem = filterTabContents.map(({ contents, ownIcon }) => (
    <Tab contents={contents} Icon={ownIcon} />
  ));

  return (
    <>
      <a href="/">
        <Logo />
      </a>
      <TabBar>{filterTabItem}</TabBar>
    </>
  );
}

export default DefaultHeader;
