import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { UseSaveNewUserHook } from '../../hooks/UseSaveNewUserHook';
import styles from './SignIn.module.css';

export const SignIn = () => {
  const { saveNewUser, handleFormValues } = UseSaveNewUserHook();

  return (
    <Box className={styles.SignIn} component="form">
      <TextField
        label="Name"
        name="name"
        fullWidth
        onChange={(event) => handleFormValues(event)}
      />

      <TextField
        label="E-mail"
        name="email"
        type="email"
        fullWidth
        onChange={(event) => handleFormValues(event)}
      />

      <TextField
        label="Username"
        name="username"
        fullWidth
        onChange={(event) => handleFormValues(event)}
      />

      <TextField
        label="Password"
        name="password"
        type="password"
        fullWidth
        onChange={(event) => handleFormValues(event)}
      />

      <Button
        variant="contained"
        sx={{ padding: '0.625rem 5rem' }}
        onClick={() => saveNewUser()}
      >
        Sign-in
      </Button>
    </Box>
  );
};
