import Text from '@/components/common/Text';

type OriginalPriceProps = {
  originalPrice: string;
};

function OriginalPriceText({ originalPrice }: OriginalPriceProps) {
  const originalPriceTextStyle = { textDecoration: 'line-through' };

  return (
    <Text
      contents={originalPrice}
      color="useless"
      styles={originalPriceTextStyle}
    />
  );
}

export default OriginalPriceText;
