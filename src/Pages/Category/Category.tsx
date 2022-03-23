import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsGrid } from '../../components/ProductsGrid/ProductsGrid';
import { useGetAllProductsByCategory } from '../../hooks/useGetAllProductsByCategory';
import styles from './Category.module.css';

export const Category = () => {
  const { reference } = useParams();
  const [enabledQuery, setEnabledQuery] = useState(false);
  const { isProductsLoading, products, resetProducts } =
    useGetAllProductsByCategory(reference ?? '', enabledQuery);

  useEffect(() => {
    resetProducts();

    if (reference) {
      setEnabledQuery(true);
    }
  }, [reference, resetProducts]);

  return (
    <Box className={styles.Category}>
      <Box className={styles.content}>
        <ProductsGrid
          isProductsLoading={isProductsLoading}
          products={products}
        />
      </Box>
    </Box>
  );
};
