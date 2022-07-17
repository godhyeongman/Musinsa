import React, { useState } from 'react';
import styled from 'styled-components';

type InputProps = { isClicked: boolean; onChange(e: React.ChangeEvent): void };

function Input({ isClicked, onChange }: InputProps) {
  const [matching, setMetching] = useState(null);
  const searchedData = matching
    ? matching.map(goodsName => (
        <SearchingKeyWord>{goodsName}</SearchingKeyWord>
      ))
    : null;
  return (
    <StyledForm
      isClicked={isClicked}
      onClick={e => {
        e.stopPropagation();
      }}
    >
      <StyledInput
        placeholder="상품 검색"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const matchedData = onChange(e);
          setMetching(matchedData);
        }}
      />
      {searchedData}
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
