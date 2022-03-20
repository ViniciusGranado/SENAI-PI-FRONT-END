import { AddShoppingCart } from '@mui/icons-material';
import { Button, CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UseGetProductById } from '../../hooks/UseGetProductById';
import styles from './ProductDetail.module.css';

export const ProductDetail = () => {
  const { id } = useParams();
  const [enabledQuery, setEnabledQuery] = useState(false);

  const { product, isProductLoading } = UseGetProductById(
    id ?? '',
    enabledQuery
  );

  useEffect(() => {
    if (id) {
      setEnabledQuery(true);
    }
  }, [id]);

  return (
    <Box className={styles.ProductDetail}>
      {isProductLoading || !product ? (
        <CircularProgress />
      ) : (
        <>
          <Box className={styles['image-container']}>
            <img src={product.imgUrl} alt={product.name} />
          </Box>

          <Box className={styles['info-container']}>
            <Box>
              <Typography variant="h1" sx={{ fontSize: '5rem' }}>
                {product.name}
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{ fontSize: '2rem', fontWeight: 'lighter' }}
              >
                {product.description}
              </Typography>

              <Typography variant="body1" sx={{ fontSize: '4rem' }}>
                R${product.price.toFixed(2)}
              </Typography>
            </Box>

            <Button
              variant="contained"
              startIcon={<AddShoppingCart />}
              className={styles['add-to-cart-button']}
            >
              Add To Cart
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};
