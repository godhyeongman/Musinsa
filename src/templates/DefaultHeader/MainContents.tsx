import { Dispatch } from 'react';
import Tab from '@/components/filter/Tab';
import { filterDataType } from '@/constants/FilterTabContents';
import {
  ProductsFliterAction,
  ProductsFilterStateType,
} from '@/contexts/ProductsFilter/types';
import ActivatedFilterTab from '@/components/filter/ActivatedFilterTab';

import * as Handlers from './handlers';

export const getMainContents = (
  TabData: filterDataType[],
  toggleContextState: boolean,
  setToggleDisplayState: Dispatch<boolean>,
  dispatchFilterAction: Dispatch<ProductsFliterAction>,
) => {
  const filterTabItem = TabData.map(
    ({ contents, ownIcon, actionType }, idx) => {
      if (idx === 0) {
        return (
          <Tab
            contents={contents}
            Icon={ownIcon}
            onClickHandler={e => {
              Handlers.toggleFilterInput(
                e,
                toggleContextState,
                setToggleDisplayState,
              );
            }}
          />
        );
      }
      return (
        <Tab
          contents={contents}
          Icon={ownIcon}
          onClickHandler={() => {
            Handlers.handleFilterTab(actionType!, dispatchFilterAction);
          }}
        />
      );
    },
  );

  return filterTabItem;
};

export const getActivatedTabs = (
  TAB_LIST: string[],
  productsFilterState: ProductsFilterStateType,
) =>
  Object.values(productsFilterState).map((value, idx) => (
    <ActivatedFilterTab isActivate={value} contents={TAB_LIST[idx]} />
  ));
