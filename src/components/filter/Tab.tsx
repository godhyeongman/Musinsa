import { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import Text from '@/components/common/Text';

type TabProps = {
  contents: string;
  onClickHandler?(e: React.MouseEvent<HTMLElement>): void;
  Icon?: ReactElement | null;
  backgroundColor?: string;
};

function Tab({
  contents,
  onClickHandler,
  Icon,
  backgroundColor = 'transparent',
}: TabProps) {
  return (
    <TabWrapper backgroundColor={backgroundColor}>
      <Text contents={contents} fontWeight="small" />
      {Icon}
    </TabWrapper>
  );
}

const TabWrapper = styled.button<Partial<TabProps>>`
  display: flex;
  gap: 7px;
  padding: 7px 15px;
  border: 1px solid ${({ theme }) => theme.color.tabBorder};
  border-radius: 18px;

  ${({ backgroundColor }) => css`
    background-color: ${backgroundColor};
  `}
`;

export default Tab;
