import Logo from '@/assets/icons/Logo.svg';
import TabBar from '@/components/filter/TabBar';
import Tab from '@/components/filter/Tab';
import FILTER_TAB_DATA from '@/constants/FilterTabContents';
import SearchInput from '@/components/search/Input';

// TODO: a 태그 추후 리액트 라우터 돔을 이용하여 Link태그로 개선가능
function DefaultHeader() {
  const filterTabItem = FILTER_TAB_DATA.map(({ contents, ownIcon }) => (
    <Tab contents={contents} Icon={ownIcon} />
  ));

  return (
    <>
      <a href="/">
        <Logo />
      </a>
      <TabBar>{filterTabItem}</TabBar>
      <SearchInput />
    </>
  );
}

export default DefaultHeader;
