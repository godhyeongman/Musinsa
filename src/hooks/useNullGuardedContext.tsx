import React, { useContext } from 'react';

export const useNullGuardedContext = <TargetType,>(
  context: React.Context<TargetType | null>,
): TargetType => {
  const targetState = useContext(context);

  if (targetState === null || targetState === undefined) {
    throw new Error('target State Error: 값이 없습니다.');
  }

  return targetState;
};
