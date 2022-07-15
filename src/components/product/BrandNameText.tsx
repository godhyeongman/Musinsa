import Text from '@/components/common/Text';

type BrandNameProps = { name: string };

function BrandNameText({ name }: BrandNameProps) {
  const brandNameTextStyle = { marginBottom: '8px' };

  return <Text contents={name} fontSize="small" styles={brandNameTextStyle} />;
}

export default BrandNameText;
