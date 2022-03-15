import { AddShoppingCart } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, Skeleton } from '@mui/material';

export const LoadingProductCard = () => {
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
        <Skeleton variant="rectangular" width={258} height={258} />
      </Box>
      <CardContent sx={{textAlign: 'right'}}>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </CardContent>
      <CardActions disableSpacing sx={{display: 'flex', justifyContent: 'flex-end'}}>
        <Button startIcon={< AddShoppingCart />} variant='contained'>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};
