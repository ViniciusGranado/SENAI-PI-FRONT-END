import { useMutation } from 'react-query';
import { storeApi } from '../api/store.api';
import { Order } from '../models/models';


export const UsesCreateCartHook = (clientId: string) => {
  const { 
    mutate: createCart,
    data: orderData,
    isLoading: isCreateDatatLoading,
   } = useMutation<Order>(
      storeApi.createCart(clientId),
    );


  return {
    createCart,
    orderData,
    isCreateDatatLoading,
  }
}