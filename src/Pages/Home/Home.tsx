import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import bannerBg from '../../assets/banner/banner.jpg';
import { ProductsGrid } from '../../components/ProductsGrid/ProductsGrid';
import { useGetAllProductsHook } from '../../hooks/UseGetAllProductsHook';
import styles from './Home.module.css';

export const Home = () => {
  const { isProductsLoading, products } = useGetAllProductsHook();

  return (
    <Box className={styles.Home}>
      <Container className={styles.banner}>
        <img src={bannerBg} alt="Banner Background" />
        <Typography variant="body1" color="initial">
          Our favorite products for you
        </Typography>
      </Container>

      <Box className={styles.content}>
        <ProductsGrid isProductsLoading={isProductsLoading} products={products} />
      </Box>
    </Box>
  );
};
