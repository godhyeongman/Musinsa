import SEARCH_ICON from '@/assets/icons/Search.svg';
import { ReactElement } from 'react';

export type filterDataType = {
  contents: string;
  ownIcon: ReactElement | null;
  actionType?:
    | 'CLICKED_SALE'
    | 'CLICKED_EXCLUSIVE'
    | 'CLICKED_SOLD_OUT'
    | 'RESET';
};

const filterTabContents: filterDataType[] = [
  { contents: '세일상품', ownIcon: null, actionType: 'CLICKED_SALE' },
  { contents: '단독상품', ownIcon: null, actionType: 'CLICKED_EXCLUSIVE' },
  { contents: '품절포함', ownIcon: null, actionType: 'CLICKED_SOLD_OUT' },
];

export const searchTabContents: filterDataType = {
  contents: '검색',
  ownIcon: <SEARCH_ICON />,
};
export const TAB_LIST = ['세일상품', '단독상품', '품절상품'];

export default filterTabContents;
