import { ShoppingCart } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LogoHorizontal } from '../LogoHorizontal/LogoHorizontal';
import styles from './Header.module.css';
import { Navbar } from './Navbar/Navbar';
import { UseLogoutHook } from '../../hooks/UseLogoutHook';

export const Header = () => {
  const navigate = useNavigate();
  const { logout } = UseLogoutHook();

  const isUserAuthenticated =
    localStorage.getItem('isAuthenticated') === 'true';

  return (
    <>
      <Box className={styles.Header}>
        <LogoHorizontal />

        <Box className={styles['buttons-container']}>
          {isUserAuthenticated ? (
            <>
              <Button
                variant="contained"
                startIcon={<ShoppingCart />}
                onClick={() => navigate('/cart')}
              >
                Cart
              </Button>
              <Button variant="outlined" onClick={logout}>
                Log-out
              </Button>
            </>
          ) : (
            <>
              <Button variant="outlined" onClick={() => navigate('/sign-in')}>
                Sign-in
              </Button>
              <Button variant="contained" onClick={() => navigate('/login')}>
                Login
              </Button>
            </>
          )}
        </Box>
      </Box>
      <Navbar />
    </>
  );
};
