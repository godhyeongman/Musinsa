import styled from 'styled-components';
import Text from '@/components/common/Text';

type ProductNameProps = { name: string };

function ProductNameText({ name }: ProductNameProps) {
  return <StyledText contents={name} />;
}

const StyledText = styled(Text)`
  text-decoration: line-through;
`;

export default ProductNameText;
