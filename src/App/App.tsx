import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { AllProducts } from '../Pages/AllProducts/AllProducts';
import { Cart } from '../Pages/Cart/Cart';
import { Category } from '../Pages/Category/Category';
import { Home } from '../Pages/Home/Home';
import { Login } from '../Pages/Login/Login';
import { OrderSummary } from '../Pages/OrderSummary/OrderSummary';
import { ProductDetail } from '../Pages/ProductDetail/ProductDetail';
import { SignIn } from '../Pages/SignIn/SignIn';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.App}>
      <Header />

      <Box className={styles.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:reference" element={<Category />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-summary/:id" element={<OrderSummary />} />
        </Routes>
      </Box>
    </div>
  );
};

export default App;
