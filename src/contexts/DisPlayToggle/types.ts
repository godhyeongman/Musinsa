import { Dispatch, ReactNode } from 'react';

export type ToggleStateDispatchContext = {
  setToggle: Dispatch<boolean>;
  setFalse(): void;
  setTrue(): void;
};

export type ToggleProviderProps = {
  children?: ReactNode;
};
