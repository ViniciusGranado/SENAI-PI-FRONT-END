import { Box, TextField, Button, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { UseAuthenticateUserHook } from '../../hooks/UseAuthenticateUserHook';
import { AlertDialog } from '../../components/AlertDialog/AlertDialog';
import { useNavigate } from 'react-router-dom';

import styles from './Login.module.css';

export const Login = () => {
  const {
    authenticateUser,
    userRole,
    handleFormValues,
    isQueryLoading,
    isQuerySuccess,
    isQueryError,
    errorStatus,
    loginFormDTO,
  } = UseAuthenticateUserHook();

  const navigate = useNavigate();

  const [isUserNotFound, setTsUserNotFound] = useState(false);
  const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleOpenAlert = () => {
    setIsAlertOpen(true);
  };

  const handleCloseAlert = () => {
    setIsAlertOpen(false);
  };

  useEffect(() => {
    if (isQuerySuccess && userRole) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userRole', userRole);
      navigate('/');
    }
  }, [userRole, isQuerySuccess, navigate]);

  useEffect(() => {
    if (isQueryError && errorStatus) {
      switch (errorStatus.message) {
        case '404':
          setTsUserNotFound(true);
          setIsPasswordIncorrect(false);
          break;

        case '401':
          setTsUserNotFound(false);
          setIsPasswordIncorrect(true);
          break;

        default:
          handleOpenAlert();
          break;
      }
    }
  }, [isQueryError, errorStatus, userRole]);

  return (
    <Box className={styles.Login} component="form">
      {isQueryLoading ? (
        <CircularProgress />
      ) : (
        <>
          <TextField
            label="Username"
            name="username"
            value={loginFormDTO.username}
            error={isUserNotFound}
            helperText={isUserNotFound ? "This user don't exist" : undefined}
            fullWidth
            onChange={(event) => handleFormValues(event)}
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            value={loginFormDTO.password}
            error={isPasswordIncorrect}
            helperText={
              isPasswordIncorrect ? 'The password is incorrect' : undefined
            }
            fullWidth
            onChange={(event) => handleFormValues(event)}
          />

          <Button
            variant="contained"
            sx={{ padding: '0.625rem 5rem' }}
            onClick={() => authenticateUser()}
          >
            Login
          </Button>
        </>
      )}
      <AlertDialog
        isOpen={isAlertOpen}
        onClose={handleCloseAlert}
        title="Error"
        message="There was an unexpected error while logging in. Please try again"
        severity="error"
      />
    </Box>
  );
};
