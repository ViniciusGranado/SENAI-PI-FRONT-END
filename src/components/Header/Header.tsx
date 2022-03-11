import { Box, Button } from '@mui/material';

import { LogoHorizontal } from '../LogoHorizontal/LogoHorizontal';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <Box className={styles.Header}>
      <LogoHorizontal />
      
      <Button variant='contained'>Login</Button>
    </Box>
  );
};
