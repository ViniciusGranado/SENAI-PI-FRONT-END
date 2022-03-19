import { Box, TextField, FormControl, Button } from '@mui/material';

import styles from './Login.module.css';

export const Login = () => {
  return (
    <Box className={styles.Login} component="form">
      <FormControl fullWidth>
        <TextField label="Username" />
      </FormControl>

      <FormControl fullWidth>
        <TextField label="Password" type="password" />
      </FormControl>

      <Button variant='contained' sx={{padding: '0.625rem 5rem'}}>Login</Button>
    </Box>
  );
};
