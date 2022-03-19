import { Box } from '@mui/material';
import { ProductsGrid } from '../../components/ProductsGrid/ProductsGrid';
import { useGetAllProductsHook } from '../../hooks/UseGetAllProductsHook';
import styles from './AllProducts.module.css';

export const AllProducts = () => {
  const { isProductsLoading, products } = useGetAllProductsHook();

  return (
    <Box className={styles.AllProducts}>
      <Box className={styles.content}>
        <ProductsGrid isProductsLoading={isProductsLoading} products={products} />
      </Box>
    </Box>
  );
};
