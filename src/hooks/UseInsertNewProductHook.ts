import { useState } from 'react';
import { useMutation } from 'react-query';
import { storeApi } from '../api/store.api';
import { Product, NewProductDto } from '../models/models';

const initialNewProductDto: NewProductDto = {
  name: '',
  description: '',
  price: 0,
  imgUrl: '',
  favorite: false,
  categories: []
}

export const UseInsertNewProductHook = () => {
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
