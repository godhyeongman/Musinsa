import React, { createContext } from 'react';

export const ToggleState = createContext(null);
export const ToggleStateDispatch = createContext(null);

export function ToggleProvider({ children }: React.ReactNode) {
  // TODO: 토글 상태 훅으로 분리할것
  const [toggleState, setToggleState] = useState(false);

  return (
    <ToggleState.Provider value={toggleState}>
      <ToggleStateDispatch.Provider value={setToggleState}>
        {children}
      </ToggleStateDispatch.Provider>
    </ToggleState.Provider>
  );
}
