import { useQuery } from 'react-query';
import { storeApi } from '../api/store.api';
import { Order } from '../models/models';

export const useGetOrderById = (orderId: string, enabled: boolean) => {
  const { data: order, isLoading: isOrderLoading } = useQuery<Order>(
    'get-order-by-id',
    storeApi.getOrderById(orderId),
    { enabled: enabled }
  );

  return {
    order,
    isOrderLoading,
  };
};
