import { ReactNode } from 'react';
import styled from 'styled-components';

type TabButtonProps = {
  contents: string;
  onClickHandler?(e: React.MouseEvent<HTMLElement>): void;
  icon?: ReactNode;
  backgroundColor?: string;
};

function TabButton({
  contents,
  onClickHandler,
  icon,
  backgroundColor = 'translate',
}: TabButtonProps) {
  return <TabButtonWrapper />;
}

const TabButtonWrapper = styled.button`
  padding: 7px 15px;
  border: 1px solid ${({ theme }) => theme.color.primary};
`;

export default TabButtonProps;
