import { useMutation, useQueryClient } from 'react-query';
import { CartItemData, Product } from '../models/models';

const deleteCartItem = async (cartItemData: CartItemData) => {
  
  const response = await fetch(`http://localhost:8080/cart-item`, {
    method: 'DELETE',
    body: JSON.stringify(cartItemData),
    headers: { 'Content-Type': 'application/json' },
  });
  
  if (!response.ok) {
    throw new Error(`${response.status}`);
  }
  
  return response.json();
};

export const UseDeleteCartItemHook = () => {
  const queryClient = useQueryClient();

  const {
    mutate: deleteProduct,
    isSuccess: isDeleteProductSuccess,
    isLoading: isDeleteProductLoading,
  } = useMutation<Product, Error, CartItemData>((cartItemData) =>
    deleteCartItem(cartItemData),
    { onSuccess: () => {
      queryClient.invalidateQueries('get-cart-by-client-id');
    }}
  );

  return {
    deleteProduct,
    isDeleteProductSuccess,
    isDeleteProductLoading,
  };
};
