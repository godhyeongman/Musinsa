import styled from 'styled-components';
import Close from '@/assets/icons/Close.svg';
import Text from '@/components/common/Text';

type ActivatedFilterTabProps = {
  contents: string;
  isActivate: boolean | null;
};

function ActivatedFilterTab({ contents, isActivate }: ActivatedFilterTabProps) {
  return (
    <StyledButton isActive={isActivate}>
      <Text contents={contents} color="white" />
      <Close />
    </StyledButton>
  );
}

const StyledButton = styled.button<{ isActive: boolean | null }>`
  padding: 4px 10px;
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  border: none;
  background-color: ${({ theme }) => theme.color.primary};
  justify-content: space-between;
  margin-top: 5px;
  align-items: center;
  border-radius: 5px;
`;

export default ActivatedFilterTab;
