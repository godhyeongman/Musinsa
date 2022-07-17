export { pipe } from './shared';

export const checkTargetState =
  (filterState: boolean, target: string) => (datas: []) =>
    datas.filter(data => {
      if (filterState === null) {
        return true;
      }
      return data[target] === filterState;
    });

export const checkSearchState = (searchState: any) => (datas: []) =>
  datas.filter(data => {
    if (!searchState) {
      return true;
    }
    return searchState.includes(data);
  });
