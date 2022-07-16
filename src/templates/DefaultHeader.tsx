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
} from '@/contexts/DisPlayToggle/DisplayToggleProvider';
import { ProductsFilterDispatchContext } from '@/contexts/ProductsFilter/ProductsFilterProvider';

function DefaultHeader() {
  const toggleDisplayState = useNullGuardedContext(ToggleStateContext);
  const { setToggle } = useNullGuardedContext(ToggleStateDispatchContext);
  const filteringDispatch = useNullGuardedContext(
    ProductsFilterDispatchContext,
  );

  const toggleFilterInput = (
    e: React.MouseEvent<HTMLElement>,
    currentDisplayState: boolean,
  ) => {
    e.stopPropagation();

    setToggle(currentDisplayState);
  };

  const handleFilterTab = (
    actionType:
      | 'CLICKED_SALE'
      | 'CLICKED_EXCLUSIVE'
      | 'CLICKED_SOLD_OUT'
      | 'RESET',
  ) => {
    const action = { type: actionType };
    filteringDispatch(action);
  };
  // Todo: 리팩토링 -> 검색 버튼을 따로 만들것인가에 대해서 고민할것 그럴경우 if문 사라짐
  const filterTabItem = FILTER_TAB_DATA.map(
    ({ contents, ownIcon, actionType }, idx) => {
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
      return (
        <Tab
          contents={contents}
          Icon={ownIcon}
          onClickHandler={() => {
            handleFilterTab(actionType!);
          }}
        />
      );
    },
  );

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
