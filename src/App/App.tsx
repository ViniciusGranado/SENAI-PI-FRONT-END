import { Header } from '../components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import { Home } from '../Pages/Home/Home';
import { Category } from '../Pages/Category/Category';
import { AllProducts } from '../Pages/AllProducts/AllProducts'

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
        </Routes>
      </Box>
    </div>
  );
};

export default App;
