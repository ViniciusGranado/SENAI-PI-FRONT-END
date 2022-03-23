import { useState } from 'react';
import { useMutation } from 'react-query';
import { storeApi } from '../api/store.api';
import { NewProductDto, Product } from '../models/models';

const initialNewProductDto: NewProductDto = {
  name: '',
  description: '',
  price: 0,
  imgUrl: '',
  favorite: false,
  categories: [],
};

export const useInsertNewProductHook = () => {
  const [newProductDto, setNewProductDto] = useState(initialNewProductDto);

  const {
    mutate: createProduct,
    isSuccess: isCreateProductSuccess,
    isLoading: isCreateProductLoading,
    isError: isCreateProductError,
  } = useMutation<Product>(storeApi.insertProduct(newProductDto));

  return {
    createProduct,
    isCreateProductSuccess,
    isCreateProductLoading,
    isCreateProductError,
    setNewProductDto,
    newProductDto,
  };
};
