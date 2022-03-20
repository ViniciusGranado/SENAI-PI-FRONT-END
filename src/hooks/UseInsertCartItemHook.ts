import { useMutation } from 'react-query';
import { CartItemData, Product } from '../models/models';

const insertCartItem = async (cartItemData: CartItemData) => {
  const response = await fetch(`http://localhost:8080/cart-item`, {
    method: 'POST',
    body: JSON.stringify(cartItemData),
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`${response.status}`);
  }

  return response.json();
};

export const UseInsertCartItemHook = () => {
  const {
    mutate: insertProduct,
    isSuccess: isInsertProductSuccess,
    isLoading: isInsertProductLoading,
  } = useMutation<Product, Error, CartItemData>((cartItemData) =>
    insertCartItem(cartItemData)
  );

  return {
    insertProduct,
    isInsertProductSuccess,
    isInsertProductLoading,
  };
};
