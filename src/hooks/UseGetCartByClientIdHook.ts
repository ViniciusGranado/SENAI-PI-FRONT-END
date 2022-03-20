import { useQuery } from 'react-query';
import { storeApi } from '../api/store.api';
import { Cart} from '../models/models';


export const UseGetCartByClientIdHook = (clientId: string, enabled: boolean) => {
  const { 
    data: cart,
    isLoading: isCartLoading,
   } = useQuery<Cart>(
     'get-cart-by-client-id',
     storeApi.getCartByClientId(clientId),
     { enabled: enabled }
    );


  return {
    cart,
    isCartLoading,
  }
};
