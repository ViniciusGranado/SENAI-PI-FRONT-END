import { Box, Button } from '@mui/material';

import { LogoHorizontal } from '../LogoHorizontal/LogoHorizontal';
import { Navbar } from './Navbar/Navbar';
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box className={styles.Header}>
        <LogoHorizontal />

        <Box className={styles['buttons-container']}>
          <Button variant="outlined">Sign-in</Button>
          <Button variant="contained" onClick={() => navigate('/login')}>Login</Button>
        </Box>
      </Box>
      <Navbar />
    </>
  );
};
