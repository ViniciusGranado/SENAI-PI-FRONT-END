import { useQuery } from 'react-query';
import { storeApi } from '../api/store.api';
import { Product } from '../models/models';

export const UseGetProductById = (id: string, enabled: boolean) => {
  const { data: product, isLoading: isProductLoading } = useQuery<Product>(
    'get-product-by-id',
    storeApi.getProductById(id),
    { enabled: enabled },
  );

  return {
    product,
    isProductLoading,
  }
};
