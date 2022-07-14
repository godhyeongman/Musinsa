import React, { createContext, Dispatch } from 'react';
import { useBoolean } from '@/hooks/useBoolean';

export const ToggleStateContext = createContext<null | boolean>(null);
export const ToggleStateDispatchContext = createContext<null | {
  setToggle: React.Dispatch<boolean>;
  setFalse(): void;
  setTrue(): void;
}>(null);

type ToggleProviderProps = {
  children?: React.ReactNode;
};

export function DisplayToggleProvider({ children }: ToggleProviderProps) {
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
