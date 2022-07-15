import Text from '@/components/common/Text';

type CurrentPriceProps = {
  price: string;
};

function CurrentPriceText({ price }: CurrentPriceProps) {
  return <Text contents={price} fontSize="large" fontWeight="large" />;
}

export default CurrentPriceText;
