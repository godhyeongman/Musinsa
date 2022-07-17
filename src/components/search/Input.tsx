import React, { useContext, useState, useDeferredValue, useMemo } from 'react';
import styled from 'styled-components';
import { SearchProductsDisPatchContext } from '@/contexts/SearchProducts/SearchProductsProvider';

type InputProps = { isClicked: boolean; onChange(e: React.ChangeEvent): void };

function Input({ isClicked, onChange }: InputProps) {
  const [matching, setMetching] = useState(null);
  const deferredIssueData = useDeferredValue(matching);
  const setSearchProductsContext = useContext(SearchProductsDisPatchContext);
  const checkInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const matchedData = onChange(e);
    setMetching(matchedData);
  };

  const setItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (matching) {
      setSearchProductsContext!(matching);
    }
  };

  const deferredMatchingData = useMemo(
    () =>
      matching
        ? matching.map(({ goodsName }: { goodsName: string }) => (
            <SearchingKeyWord>{goodsName}</SearchingKeyWord>
          ))
        : null,
    [deferredIssueData],
  );

  return (
    <StyledForm
      isClicked={isClicked}
      onClick={e => {
        e.stopPropagation();
      }}
      onSubmit={setItem}
    >
      <StyledInput placeholder="상품 검색" onChange={checkInput} />
      {deferredMatchingData}
    </StyledForm>
  );
}

const StyledForm = styled.form<Partial<InputProps>>`
  display: ${({ isClicked }) => (isClicked ? 'flex' : 'none')};
  justify-content: center;
  width: 330px;
  align-items: center;
  flex-direction: column;
  padding: 15px 20px;
`;

const StyledInput = styled.input`
  width: 300px;
  padding: 8px 14px;
  border: 1px solid ${({ theme }) => theme.color.inputBorder};
`;

const SearchingKeyWord = styled.div`
  background-color: 'red';
`;
export default Input;
