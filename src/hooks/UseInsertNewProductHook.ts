import { useState } from 'react';
import { useMutation 
} from 'react-query';
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

  const handleFormValues = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    console.log('change');
  };

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
    handleFormValues,
    newProductDto,
  };
};
