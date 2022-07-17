import { RefObject, Dispatch, SetStateAction } from 'react';

export const onInterSect = (
  target: RefObject<HTMLDivElement>,
  loadMore: Dispatch<SetStateAction<string>>,
  setCount: Dispatch<SetStateAction<number>>,
  currnetCount: number,
) => {
  if (!target.current) {
    return;
  }
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      loadMore(`${process.env.GET_PRODUCT_DATA}${currnetCount}.json`);
      setCount(currnetCount + 1);
    }
  });

  observer.observe(target.current!);
  return () => observer && observer.disconnect();
};
