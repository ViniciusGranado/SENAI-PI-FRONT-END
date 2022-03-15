import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import bannerBg from '../../assets/banner/banner.jpg';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { LoadingProductCard } from '../../components/ProductCard/LoadingProductCard';
import { useGetAllProductsHook } from '../../hooks/UseGetAllProductsHook';
import styles from './Home.module.css';

export const Home = () => {
  const { isProductsLoading, products } = useGetAllProductsHook();

  const buildContent = () => {
    if (isProductsLoading) {
      return [
        <LoadingProductCard />,
        <LoadingProductCard />,
        <LoadingProductCard />,
      ];
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
        <img src={bannerBg} alt="Banner Background" />
        <Typography variant="body1" color="initial">
          Our favorite products for you
        </Typography>
      </Container>

      <Box className={styles.content}>{buildContent()}</Box>
    </Box>
  );
};
