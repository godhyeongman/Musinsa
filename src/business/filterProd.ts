export { pipe } from './shared';

export const checkTargetState =
  (filterState: boolean, target: string) => (datas: []) =>
    datas.filter(data => {
      if (filterState === null) {
        return true;
      }
      return data[target] === filterState;
    });
