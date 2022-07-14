import styled from 'styled-components';
import Text from '@/components/common/Text';

type BrandNameProps = { name: string };

function BrandName({ name }: BrandNameProps) {
  return <StyledText contents={name} fontSize="small" />;
}

const StyledText = styled(Text)`
  margin-bottom: 8px;
`;

export default BrandName;