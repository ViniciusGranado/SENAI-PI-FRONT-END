import { AddShoppingCart } from '@mui/icons-material';
import { CircularProgress, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UseGetProductById } from '../../hooks/UseGetProductById';
import { UseInsertCartItemHook } from '../../hooks/UseInsertCartItemHook';
import styles from './ProductDetail.module.css';

export const ProductDetail = () => {
  const { id: productId } = useParams();
  const clientId = localStorage.getItem('clientId');
  const id = useParams();
  const navigate = useNavigate();

  const { insertProduct, isInsertProductSuccess, isInsertProductLoading } = UseInsertCartItemHook();

  const [enabledQuery, setEnabledQuery] = useState(false);

  const { product, isProductLoading } = UseGetProductById(
    productId ?? '',
    enabledQuery
  );

  useEffect(() => {
    if (id) {
      setEnabledQuery(true);
    }
  }, [id]);

  useEffect(() => {
    if (isInsertProductSuccess) {
      navigate('/cart');
    }
  }, [isInsertProductSuccess, navigate]);

  const onAddToCart = () => {
    if (clientId !== null && productId) {
      insertProduct({
        clientId: Number.parseInt(clientId),
        productId: Number.parseInt(productId),
      });
    }
  };

  return (
    <Box className={styles.ProductDetail}>
      {isProductLoading || !product || !clientId ? (
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
                ${product.price.toFixed(2)}
              </Typography>
            </Box>

            <LoadingButton
              variant="contained"
              startIcon={<AddShoppingCart />}
              className={styles['add-to-cart-button']}
              onClick={onAddToCart}
              loading={isInsertProductLoading}
            >
              Add To Cart
            </LoadingButton>
          </Box>
        </>
      )}
    </Box>
  );
};
