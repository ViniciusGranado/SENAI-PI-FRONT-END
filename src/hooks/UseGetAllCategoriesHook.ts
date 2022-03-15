import { useQuery } from 'react-query';
import { storeApi } from '../api/store.api';

import { Category } from '../models/models';

export const useGetAllCategoriesHook = () => {
  const { data: categories, isLoading: isCategoriesLoading } = useQuery<Category[]>(
    'categories',
    storeApi.getAllCategories
  );

  return {
    categories,
    isCategoriesLoading,
  };
};
