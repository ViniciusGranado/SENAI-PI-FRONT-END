import { useGetAllProductsHook } from '../../hooks/UseGetAllProductsHook';

export const Home = () => {
  const products = useGetAllProductsHook();

  return <>{products.isLoading ? <p>Loading...</p> : <p>Done</p>}</>;
};
