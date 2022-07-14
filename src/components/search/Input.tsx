import styled from 'styled-components';
import SEARCH_ICON from '@/assets/icons/Search.svg';

type InputProps = { isClicked: boolean };

function Input({ isClicked }: InputProps) {
  return (
    <StyledForm isClicked={isClicked}>
      <StyledInput placeholder="상품 검색" />
    </StyledForm>
  );
}

const StyledForm = styled.form<Partial<InputProps>>`
  display: ${({ isClicked }) => (isClicked ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
`;

const StyledInput = styled.input`
  width: 345px;
  padding: 8px 14px;
  border: 1px solid ${({ theme }) => theme.color.inputBorder};

  // place 홀더 아이콘 웹킷 설정 변경 시도 실패
  /* ::-webkit-input-placeholder {
    background-image: ${SEARCH_ICON};
    background-repeat: no-repeat;
    text-align: center;
    text-indent: 0;
  } */
`;

export default Input;
