import Text from '@/components/common/Text';

type DiscountRateProps = { discountRate: string };

function DiscountRateText({ discountRate }: DiscountRateProps) {
  return (
    <Text
      contents={`${discountRate}%`}
      fontSize="large"
      fontWeight="large"
      color="red"
    />
  );
}

export default DiscountRateText;
