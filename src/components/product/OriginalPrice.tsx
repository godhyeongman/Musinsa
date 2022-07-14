import styled from 'styled-components';
import Text from '@/components/common/Text';

type OriginalPriceProps = {
  originalPrice: string;
};

function OriginalPriceText({ originalPrice }: OriginalPriceProps) {
  return <StyledText contents={originalPrice} />;
}

const StyledText = styled(Text)`
  text-decoration: line-through;
`;
export default OriginalPriceText;
