import { useQuery } from 'react-query';
import { storeApi } from '../api/store.api';
import { Product } from '../models/models';


export const useGetAllProductsByCategory = (
  categoryReference: string,
  enabled: boolean
) => {
  const {
    data: products,
    isLoading: isProductsLoading,
    refetch: resetProducts,
  } = useQuery<Product[]>(
    'products',
    storeApi.getAllProductsByCategory(categoryReference),
    { enabled: enabled }
  );

  return {
    products,
    isProductsLoading,
    resetProducts,
  };
};
