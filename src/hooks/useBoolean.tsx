import { useState } from 'react';

export function useBoolean(initialBoolean: boolean) {
  const [booleanState, setbooleanState] = useState(initialBoolean);

  const setTrue = () => setbooleanState(true);
  const setFalse = () => setbooleanState(false);
  const setToggle = () => setbooleanState(!booleanState);

  return { booleanState, setTrue, setFalse, setToggle };
}
