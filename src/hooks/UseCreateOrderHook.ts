import { useMutation } from 'react-query';
import { CreateOrderDto, Order } from '../models/models';

const createOrderQuery = async (createOrderDto: CreateOrderDto) => {
  const response = await fetch(`http://localhost:8080/orders`, {
    method: 'POST',
    body: JSON.stringify(createOrderDto),
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`${response.status}`);
  }

  return response.json();
};

export const UsesCreateOrderHook = () => {
  const {
    mutate: createOrder,
    data: orderData,
    isLoading: isCreateOrderLoading,
    isSuccess: isCreateOrderSuccess,
  } = useMutation<Order, Error, CreateOrderDto>((createOrderDto) =>
    createOrderQuery(createOrderDto)
  );

  return {
    createOrder,
    orderData,
    isCreateOrderLoading,
    isCreateOrderSuccess,
  };
};
