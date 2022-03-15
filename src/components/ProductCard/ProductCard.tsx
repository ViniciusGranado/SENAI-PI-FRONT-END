import { AddShoppingCart } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

interface ProductCardProps {
  productName: string;
  productPrice: number;
  imageUrl: string
}

export const ProductCard: React.FC<ProductCardProps> = ({productName, productPrice, imageUrl}) => {
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
        <CardMedia
          component="img"
          image={imageUrl}
          alt={productName}
        />
      </Box>
      <CardContent sx={{textAlign: 'right'}}>
        <Typography variant="body1">{productName}</Typography>
        <Typography variant="h4">{`R$${productPrice}`}</Typography>
      </CardContent>
      <CardActions disableSpacing sx={{display: 'flex', justifyContent: 'flex-end'}}>
        <Button startIcon={< AddShoppingCart />} variant='contained'>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};
