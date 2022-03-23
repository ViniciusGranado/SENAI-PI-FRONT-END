import { AddShoppingCart } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useInsertCartItemHook } from '../../hooks/useInsertCartItemHook';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  productName: string;
  productPrice: number;
  imageUrl: string;
  productId: number;
  clientId: string | null;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  productName,
  productPrice,
  imageUrl,
  productId,
  clientId,
}) => {
  const { insertProduct, isInsertProductSuccess, isInsertProductLoading } =
    useInsertCartItemHook();
  const navigate = useNavigate();

  useEffect(() => {
    if (isInsertProductSuccess) {
      navigate('/cart');
    }
  }, [isInsertProductSuccess, navigate]);

  const onAddToCart = () => {
    if (clientId) {
      insertProduct({
        clientId: Number.parseInt(clientId),
        productId: productId,
      });
    } else {
      navigate('/login');
    }
  };

  return (
    <Card sx={{ maxWidth: 258 }}>
      <Box
        sx={{
          minWidth: '258px',
          minHeight: '258px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0.5rem',
        }}
      >
        <Link to={`/product/${productId}`}>
          <CardMedia component="img" image={imageUrl} alt={productName} />
        </Link>
      </Box>
      <CardContent sx={{ textAlign: 'right' }}>
        <Link to={`/product/${productId}`} className={styles['product-name']}>
          <Typography variant="body1">{productName}</Typography>
        </Link>
        <Typography variant="h4">{`$${productPrice.toFixed(2)}`}</Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        <LoadingButton
          startIcon={<AddShoppingCart />}
          variant="contained"
          onClick={onAddToCart}
          loading={isInsertProductLoading}
        >
          Add to cart
        </LoadingButton>
      </CardActions>
    </Card>
  );
};
