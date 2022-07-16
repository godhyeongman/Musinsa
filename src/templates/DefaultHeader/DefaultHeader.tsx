import styled from 'styled-components';
import Logo from '@/assets/icons/Logo.svg';
import TabBar from '@/components/filter/TabBar';
import FILTER_TAB_DATA, {
  TAB_LIST,
  searchTabContents,
} from '@/constants/FilterTabContents';
import SearchInput from '@/components/search/Input';
import { useNullGuardedContext } from '@/hooks/useNullGuardedContext';
import {
  ToggleStateContext,
  ToggleStateDispatchContext,
} from '@/contexts/DisPlayToggle/DisplayToggleProvider';
import {
  ProductsFilterContext,
  ProductsFilterDispatchContext,
} from '@/contexts/ProductsFilter/ProductsFilterProvider';
import {
  getMainContents,
  getActivatedTabs,
  getSearchTab,
} from './MainContents';

function DefaultHeader() {
  const toggleDisplayState = useNullGuardedContext(ToggleStateContext);
  const { setToggle } = useNullGuardedContext(ToggleStateDispatchContext);
  const productsFilterState = useNullGuardedContext(ProductsFilterContext);
  const filteringDispatch = useNullGuardedContext(
    ProductsFilterDispatchContext,
  );
  const { ownIcon, contents } = searchTabContents;

  const mainContents = getMainContents(FILTER_TAB_DATA, filteringDispatch);
  const activatedTabs = getActivatedTabs(TAB_LIST, productsFilterState);
  const searchTab = getSearchTab(
    { ownIcon, contents },
    toggleDisplayState,
    setToggle,
  );

  return (
    <>
      <a href="/">
        <Logo />
      </a>
      <TabBar>
        {searchTab}
        {mainContents}
      </TabBar>
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
