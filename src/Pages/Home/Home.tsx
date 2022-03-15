import { useGetAllProductsHook } from '../../hooks/UseGetAllProductsHook';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Typography, Box } from '@mui/material';

import bannerBg from '../../assets/banner/banner.jpg';
import styles from './Home.module.css';

import Container from '@mui/material/Container'
export const Home = () => {
  const { isLoading: isProductsLoading, products } = useGetAllProductsHook();

  const buildContent = () => {
    if (isProductsLoading) {
      return <Typography>Loading...</Typography>;
    }

    if (products === undefined) {
      return <Typography>Error while loading</Typography>;
    }

    return products!.map((product) => {
      return (
        <ProductCard
          productName={product.name}
          productPrice={product.price}
          imageUrl={product.imgUrl}
          key={product.id}
        />
      );
    });
  };

  return (
    <Box className={styles.Home}>
      <Container className={styles.banner}>
        <img src={bannerBg} alt='Banner Background' />
        <Typography variant="body1" color="initial">Our favorite products for you</Typography>
      </Container>

      <Box className={styles.content}>
        {buildContent()}
      </Box>
    </Box>
  );
};
