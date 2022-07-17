import * as TYPE from './types';

export const getProductFilterAction = (actionIncome: TYPE.ActionIncomeType) => {
  return { type: actionIncome };
};
