import { Product } from '../../models/models';
import { LoadingProductCard } from '../ProductCard/LoadingProductCard';
import { ProductCard } from '../ProductCard/ProductCard';
import { Typography } from '@mui/material';

interface ProductsGridProps {
  isProductsLoading: boolean;
  products: Product[] | undefined;
}

export const ProductsGrid: React.FC<ProductsGridProps> = ({
  isProductsLoading,
  products,
}) => {
  const clientId = localStorage.getItem('clientId');

  const getContent = () => {
    if (isProductsLoading) {
      return (
        <>
          <LoadingProductCard />
          <LoadingProductCard />
          <LoadingProductCard />
        </>
      );
    }

    if (products === undefined || clientId === null) {
      return <Typography>Error while loading</Typography>;
    }

    return (
      <>
        {products!.map((product) => {
          return (
            <ProductCard
              productName={product.name}
              productPrice={product.price}
              imageUrl={product.imgUrl}
              productId={product.id}
              key={product.id}
              clientId={Number.parseInt(clientId)}
            />
          );
        })}
      </>
    );
  };

  return <>{getContent()};</>;
};
