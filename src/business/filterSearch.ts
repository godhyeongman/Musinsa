export const checkSameData = (
  baseData: any[],
  comparisonTarget: string,
): string[] => {
  if (comparisonTarget === '') {
    return;
  }

  const checkedData = baseData.filter(({ goodsName }) => {
    const spiltedBase = goodsName.split('');
    const spiltedtarget = comparisonTarget.split('');
    let result = true;
    let idx = 0;

    for (const word of spiltedtarget) {
      if (spiltedBase[idx] !== word) {
        result = false;
      }
      idx += 1;
    }
    return result;
  });

  const filterByName = checkedData.map(({ goodsName }) => goodsName);

  return filterByName;
};
