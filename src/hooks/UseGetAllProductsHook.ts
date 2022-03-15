import { useQuery } from 'react-query';
import { storeApi } from '../api/store.api';

import { Product } from '../models/models';

export const useGetAllProductsHook = () => {
  const { data: products, isLoading: isProductsLoading } = useQuery<Product[]>(
    'products',
    storeApi.getAllProducts
  );

  return {
    products,
    isProductsLoading,
  };
};
