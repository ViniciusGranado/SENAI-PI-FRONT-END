import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsGrid } from '../../components/ProductsGrid/ProductsGrid';
import { UseGetAllProductsByCategory } from '../../hooks/UseGetAllProductsByCategory';
import styles from './Category.module.css';

export const Category = () => {
  const { reference } = useParams();
  const [enabledQuery, setEnabledQuery] = useState(false);
  const { isProductsLoading, products, resetProducts } = UseGetAllProductsByCategory(reference ?? '', enabledQuery);
  
  useEffect(() => {
    resetProducts();
    
    if (reference) {
      setEnabledQuery(true);
    }
  }, [reference, resetProducts]);
  
  return (
    <Box className={styles.Category}>
      <Box className={styles.content}>
        <ProductsGrid isProductsLoading={isProductsLoading} products={products} />
      </Box>
    </Box>
  );
};
