import React from 'react';
import styled from 'styled-components';
import Logo from '@/assets/icons/Logo.svg';
import TabBar from '@/components/filter/TabBar';
import Tab from '@/components/filter/Tab';
import FILTER_TAB_DATA from '@/constants/FilterTabContents';
import SearchInput from '@/components/search/Input';
import ActivatedFilterTab from '@/components/filter/ActivatedFilterTab';
import { useNullGuardedContext } from '@/hooks/useNullGuardedContext';
import {
  ToggleStateContext,
  ToggleStateDispatchContext,
} from '@/contexts/DisPlayToggle/DisplayToggleProvider';
import {
  ProductsFilterContext,
  ProductsFilterDispatchContext,
} from '@/contexts/ProductsFilter/ProductsFilterProvider';

function DefaultHeader() {
  const toggleDisplayState = useNullGuardedContext(ToggleStateContext);
  const { setToggle } = useNullGuardedContext(ToggleStateDispatchContext);
  const test = useNullGuardedContext(ProductsFilterContext);
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

  const TAB_LIST = ['세일상품', '단독상품', '품절상품'];
  const activatedTabs = Object.values(test).map((value, idx) => (
    <ActivatedFilterTab isActivate={value} contents={TAB_LIST[idx]} />
  ));

  return (
    <>
      <a href="/">
        <Logo />
      </a>
      <TabBar>{filterTabItem}</TabBar>
      <ActivatedFilterZone>{activatedTabs}</ActivatedFilterZone>
      <SearchInput isClicked={toggleDisplayState} />
    </>
  );
}

const ActivatedFilterZone = styled.section`
  display: flex;
  gap: 4px;
`;

export default DefaultHeader;
