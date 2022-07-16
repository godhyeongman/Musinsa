import SEARCH_ICON from '@/assets/icons/Search.svg';
import { ReactElement } from 'react';

type filterData = {
  contents: string;
  ownIcon: ReactElement | null;
  actionType?:
    | 'CLICKED_SALE'
    | 'CLICKED_EXCLUSIVE'
    | 'CLICKED_SOLD_OUT'
    | 'RESET';
};

const filterTabContents: filterData[] = [
  { contents: '검색', ownIcon: <SEARCH_ICON /> },
  { contents: '세일상품', ownIcon: null, actionType: 'CLICKED_SALE' },
  { contents: '단독상품', ownIcon: null, actionType: 'CLICKED_EXCLUSIVE' },
  { contents: '품절포함', ownIcon: null, actionType: 'CLICKED_SOLD_OUT' },
];

export default filterTabContents;
