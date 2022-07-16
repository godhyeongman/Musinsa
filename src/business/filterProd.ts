export const pipe =
  (...fns: Function[]) =>
  (data: []) =>
    fns.reduce((prev, fn) => fn(prev), data);

export const checkTargetState =
  (filterState: boolean, target: string) => (datas: []) =>
    datas.filter(data => {
      if (filterState === null) {
        return true;
      }
      return data[target] === filterState;
    });
