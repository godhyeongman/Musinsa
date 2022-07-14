import React, { createContext } from 'react';
import { useBoolean } from '@/hooks/useBoolean';

export const ToggleStateContext = createContext<null | boolean>(null);
export const ToggleStateDispatchContext =
  createContext<null | React.Dispatch<boolean>>(null);

type ToggleProviderProps = {
  children?: React.ReactNode;
};

export function DisplayToggleProvider({ children }: ToggleProviderProps) {
  const { booleanState, setToggle } = useBoolean(false);

  return (
    <ToggleStateContext.Provider value={booleanState}>
      <ToggleStateDispatchContext.Provider value={setToggle}>
        {children}
      </ToggleStateDispatchContext.Provider>
    </ToggleStateContext.Provider>
  );
}
