import { useQuery } from 'react-query';
import { storeApi } from '../api/store.api';

import { Product } from '../models/models';

export const useGetAllFavoritesHook = () => {
  const { data: products, isLoading: isProductsLoading } = useQuery<Product[]>(
    'products',
    storeApi.getAllFavorites
  );

  return {
    products,
    isProductsLoading,
  };
};
