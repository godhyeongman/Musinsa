/* eslint-disable @typescript-eslint/ban-types */
export const pipe =
  (...fns: Function[]) =>
  (data: []) =>
    fns.reduce((prev, fn) => fn(prev), data);
