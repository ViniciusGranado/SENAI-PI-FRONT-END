import {
  AlertColor,
  Box,
  Button,
  CircularProgress,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertDialog } from '../../components/AlertDialog/AlertDialog';
import { UseSaveNewUserHook } from '../../hooks/UseSaveNewUserHook';
import styles from './SignIn.module.css';

export const SignIn = () => {
  const {
    saveNewUser,
    handleFormValues,
    isSaveLoading,
    isSaveSuccess,
    isSaveError,
  } = UseSaveNewUserHook();
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<AlertColor | undefined>(
    undefined
  );
  const [alertTitle, setAlertTitle] = useState<string | undefined>(undefined);
  const [alertMessage, setAlertMessage] = useState<string | undefined>(
    undefined
  );

  const navigate = useNavigate();

  const handleOpenAlert = () => {
    setIsAlertOpen(true);
  };

  const handleCloseAlert = () => {
    setIsAlertOpen(false);

    if (isSaveSuccess) {
      navigate('/');
    }
  };

  useEffect(() => {
    if (isSaveSuccess) {
      setAlertSeverity('success');
      setAlertTitle('The user was created!');
      setAlertMessage('Please login to see your cart');
      handleOpenAlert();
    }
  }, [isSaveSuccess]);

  useEffect(() => {
    if (isSaveError) {
      setAlertSeverity('error');
      setAlertTitle('Error');
      setAlertMessage('The user was not created. Please try again.');
      handleOpenAlert();
    }
  }, [isSaveError]);

  return (
    <Box className={styles.SignIn} component="form">
      {isSaveLoading ? (
        <CircularProgress />
      ) : (
        <>
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
        </>
      )}
      <AlertDialog
        isOpen={isAlertOpen}
        onClose={handleCloseAlert}
        title={alertTitle}
        message={alertMessage}
        severity={alertSeverity}
      />
    </Box>
  );
};
