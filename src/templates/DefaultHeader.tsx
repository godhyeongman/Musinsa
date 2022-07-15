import React from 'react';
import Logo from '@/assets/icons/Logo.svg';
import TabBar from '@/components/filter/TabBar';
import Tab from '@/components/filter/Tab';
import FILTER_TAB_DATA from '@/constants/FilterTabContents';
import SearchInput from '@/components/search/Input';
import { useNullGuardedContext } from '@/hooks/useNullGuardedContext';
import {
  ToggleStateContext,
  ToggleStateDispatchContext,
} from '@/contexts/DisplayToggleProvider';

// TODO: a 태그 추후 리액트 라우터 돔을 이용하여 Link태그로 개선가능
function DefaultHeader() {
  const toggleDisplayState = useNullGuardedContext(ToggleStateContext);
  const { setToggle } = useNullGuardedContext(ToggleStateDispatchContext);

  const toggleFilterInput = (
    e: React.MouseEvent<HTMLElement>,
    currentDisplayState: boolean,
  ) => {
    e.stopPropagation();

    setToggle(currentDisplayState);
  };
  // Todo: 리팩토링 -> 검색 버튼을 따로 만들것인가에 대해서 고민할것 그럴경우 if문 사라짐
  const filterTabItem = FILTER_TAB_DATA.map(({ contents, ownIcon }, idx) => {
    if (idx === 0) {
      return (
        <Tab
          contents={contents}
          Icon={ownIcon}
          onClickHandler={e => {
            toggleFilterInput(e, toggleDisplayState);
          }}
        />
      );
    }
    return <Tab contents={contents} Icon={ownIcon} />;
  });

  return (
    <>
      <a href="/">
        <Logo />
      </a>
      <TabBar>{filterTabItem}</TabBar>
      <SearchInput isClicked={toggleDisplayState} />
    </>
  );
}

export default DefaultHeader;
