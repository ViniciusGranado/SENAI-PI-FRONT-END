import { AddShoppingCart } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import styles from './ProductCard.module.css';

interface ProductCardProps {
  productName: string;
  productPrice: number;
  imageUrl: string;
  productId: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({productName, productPrice, imageUrl, productId}) => {
  return (
    <Card sx={{ maxWidth: 258 }}>
      <Box sx={{
        minWidth: '258px',
        minHeight: '258px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.5rem',
      }}>
        <Link to={`/product/${productId}`} >
          <CardMedia
            component="img"
            image={imageUrl}
            alt={productName}
          />
        </Link>
      </Box>
      <CardContent sx={{textAlign: 'right'}}>
        <Link to={`/product/${productId}`} className={styles['product-name']}>
          <Typography variant="body1">{productName}</Typography>
        </Link>
        <Typography variant="h4">{`R$${productPrice.toFixed(2)}`}</Typography>
      </CardContent>
      <CardActions disableSpacing sx={{display: 'flex', justifyContent: 'flex-end'}}>
        <Button startIcon={< AddShoppingCart />} variant='contained'>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};
