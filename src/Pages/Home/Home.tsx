import { useGetAllProductsHook } from '../../hooks/UseGetAllProductsHook';
import { ProductCard } from '../../components/ProductCard/ProductCard';

export const Home = () => {
  const { isLoading: isProductsLoading, products } = useGetAllProductsHook();

  return (
    <>
      {/* {isProductsLoading ? (
        <p>Loading...</p>
      ) : (
        products.array.forEach((_: any) => {
          return <ProductCard />;
        })
      )} */}
      {isProductsLoading ? (
        <p>Loading...</p>
      ) : <ProductCard />}
    </>
  );
};
