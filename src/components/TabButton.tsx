import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

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
  backgroundColor = 'transparent',
}: TabButtonProps) {
  return (
    <TabButtonWrapper backgroundColor={backgroundColor}>
      {contents} {icon}
    </TabButtonWrapper>
  );
}

type TabButtonWrapperProps = { backgroundColor: string };

const TabButtonWrapper = styled.button<TabButtonWrapperProps>`
  display: flex;
  gap: 7px;
  padding: 7px 15px;
  border: 1px solid ${({ theme }) => theme.color.gray4};
  border-radius: 18px;

  ${({ backgroundColor }) => css`
    background-color: ${backgroundColor};
  `}
`;

export default TabButton;
