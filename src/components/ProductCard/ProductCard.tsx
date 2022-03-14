import { AddShoppingCart } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

export const ProductCard = () => {
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
          image="https://m.media-amazon.com/images/I/61RImRBgXdS._AC_SX679_.jpg"
          alt="Product Name"
        />
      </Box>
      <CardContent sx={{textAlign: 'right'}}>
        <Typography variant="body1">Notebook Asus 1GB ram 256 SSD</Typography>
        <Typography variant="h4">R$3.899</Typography>
      </CardContent>
      <CardActions disableSpacing sx={{display: 'flex', justifyContent: 'flex-end'}}>
        <Button startIcon={< AddShoppingCart />} variant='contained'>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};
