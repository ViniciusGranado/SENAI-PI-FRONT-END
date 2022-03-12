import { useQuery } from 'react-query';
import { storeApi } from '../api/store.api';

export const useGetAllProductsHook = () => {
  const { data: products, isLoading } = useQuery(
    'products',
    storeApi.getAllProducts
  );

  return {
    products,
    isLoading,
  };
};
