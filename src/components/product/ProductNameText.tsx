import styled, { css } from 'styled-components';

type ProductNameProps = { name: string };

function ProductNameText({ name }: ProductNameProps) {
  return <StyledText>{name}</StyledText>;
}

const StyledText = styled.span`
  width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 4px;
  ${({ theme }) =>
    css`
      font-size: ${theme.fontSize.large};
      font-weight: ${theme.fontWeight.large};
    `};
`;

export default ProductNameText;
