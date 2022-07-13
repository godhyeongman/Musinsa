import SEARCH_ICON from '@/assets/icons/Search.svg';
import { ReactElement } from 'react';

type filterData = {
  contents: string;
  ownIcon: ReactElement | null;
};

const filterTabContents: filterData[] = [
  { contents: '검색', ownIcon: <SEARCH_ICON /> },
  { contents: '세일상품', ownIcon: null },
  { contents: '단독상품', ownIcon: null },
  { contents: '품절포함', ownIcon: null },
];

export default filterTabContents;
