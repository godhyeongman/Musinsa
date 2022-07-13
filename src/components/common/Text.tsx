import { theme as THEME } from '@/styles/theme';
import styled, { css } from 'styled-components';

type TextProps = {
  contents: string;
  fontSize?: 'large' | 'medium' | 'small';
  fontWeight?: 'large' | 'medium' | 'small';
  color?: keyof typeof THEME.color;
};

function Text({ contents, fontSize, fontWeight, color }: TextProps) {
  return (
    <StyledSpan fontSize={fontSize} fontWeight={fontWeight} color={color}>
      {contents}
    </StyledSpan>
  );
}

const StyledSpan = styled.span<Partial<TextProps>>`
  ${({ theme, color = 'black', fontSize = 'medium', fontWeight = 'medium' }) =>
    css`
      color: ${theme.color[color]};
      font-weight: ${theme.fontWeight[fontWeight]};
      fontsize: ${theme.fontSize[fontSize]};
    `}
`;

export default Text;
