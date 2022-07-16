import { createContext } from 'react';
import { useBoolean } from '@/hooks/useBoolean';
import * as TYPE from './types';

export const ToggleStateContext = createContext<null | boolean>(null);
export const ToggleStateDispatchContext =
  createContext<null | TYPE.ToggleStateDispatchContext>(null);

export function DisplayToggleProvider({ children }: TYPE.ToggleProviderProps) {
  const { booleanState, setToggle, setFalse, setTrue } = useBoolean(false);

  return (
    <ToggleStateContext.Provider value={booleanState}>
      <ToggleStateDispatchContext.Provider
        value={{ setToggle, setFalse, setTrue }}
      >
        {children}
      </ToggleStateDispatchContext.Provider>
    </ToggleStateContext.Provider>
  );
}
