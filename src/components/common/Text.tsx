import { theme as THEME } from '@/styles/theme';
import styled, { css } from 'styled-components';

type TextProps = {
  contents: string;
  fontSize?: 'large' | 'medium' | 'small';
  fontWeight?: 'large' | 'medium' | 'small';
  color?: keyof typeof THEME.color;
  styles?: any; // 범용성을 위해
};

function Text({ contents, fontSize, fontWeight, color, styles }: TextProps) {
  return (
    <StyledSpan
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      styles={styles}
    >
      {contents}
    </StyledSpan>
  );
}

const StyledSpan = styled.span<Partial<TextProps>>`
  ${({
    theme,
    color = 'black',
    fontSize = 'medium',
    fontWeight = 'medium',
    styles,
  }) =>
    css`
      color: ${theme.color[color]};
      font-weight: ${theme.fontWeight[fontWeight]};
      fontsize: ${theme.fontSize[fontSize]};
      ${styles};
    `}
`;

export default Text;
