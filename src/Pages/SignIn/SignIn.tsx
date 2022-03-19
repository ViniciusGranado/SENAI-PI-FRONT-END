import { Box, TextField, FormControl, Button } from '@mui/material';

import styles from './SignIn.module.css';

export const SignIn = () => {
  return (
    <Box className={styles.SignIn} component="form">
      <FormControl fullWidth>
        <TextField label="First Name" />
      </FormControl>

      <FormControl fullWidth>
        <TextField label="Last Name" />
      </FormControl>

      <FormControl fullWidth>
        <TextField label="E-mail" type='email' />
      </FormControl>

      <FormControl fullWidth>
        <TextField label="Username" />
      </FormControl>

      <FormControl fullWidth>
        <TextField label="Password" type="password" />
      </FormControl>

      <Button variant='contained' sx={{padding: '0.625rem 5rem'}}>Sign-in</Button>
    </Box>
  );
};
