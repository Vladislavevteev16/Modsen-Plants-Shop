import { useAppSelector } from '@/redux/store/hooks';

export const ShopPage = () => {
  const filters = useAppSelector((state) => state.filters);
  return <main>{JSON.stringify(filters, null, 2)}</main>;
};
