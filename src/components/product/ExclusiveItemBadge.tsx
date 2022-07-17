import styled, { css } from 'styled-components';

export function ExclusiveItemBadge({ isExclusive }: { isExclusive: boolean }) {
  return <StyledBadge isExclusive={isExclusive}>단독</StyledBadge>;
}

const StyledBadge = styled.h4<{ isExclusive: boolean }>`
  padding: 4px 6px;
  position: absolute;
  left: 10px;
  bottom: -10px;
  ${({ theme, isExclusive }) => css`
    display: ${isExclusive ? 'block' : 'none'};
    color: ${theme.color.white};
    background-color: ${theme.color.badgeGreen};
    font-size: ${theme.fontSize.small};
    font-weight: ${theme.fontWeight.medium};
  `};
`;

export default ExclusiveItemBadge;
