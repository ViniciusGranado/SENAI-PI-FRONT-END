import { LoadingButton } from '@mui/lab';
import { AlertColor, Box, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { AlertDialog } from '../../../components/AlertDialog/AlertDialog';
import { UseInsertNewCategoryHook } from '../../../hooks/UseInsertNewCategoryHook';
import styles from './NewCategoryTab.module.css';

export const NewCategoryTab = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<AlertColor | undefined>(
    undefined
  );
  const [alertTitle, setAlertTitle] = useState<string | undefined>(undefined);

  const {
    createCategory,
    isCreateCategorySuccess,
    isCreateCategoryLoading,
    isCreateCategoryError,
    newCategoryDto,
    handleFormValues,
  } = UseInsertNewCategoryHook();

  useEffect(() => {
    if (isCreateCategorySuccess) {
      setAlertSeverity('success');
      setAlertTitle('The category was created!');
      handleOpenAlert();
    }
  }, [isCreateCategorySuccess]);

  useEffect(() => {
    if (isCreateCategoryError) {
      setAlertSeverity('error');
      setAlertTitle('The category was not created. Please try again.');
      handleOpenAlert();
    }
  }, [isCreateCategoryError]);

  const handleOpenAlert = () => {
    setIsAlertOpen(true);
  };

  const handleCloseAlert = () => {
    setIsAlertOpen(false);
  };

  return (
    <Box className={styles.NewCategoryTab}>
      <TextField
        label="Category Name"
        name="name"
        fullWidth
        value={newCategoryDto.name}
        onChange={handleFormValues}
      />

      <TextField
        label="Category Reference"
        name="reference"
        fullWidth
        value={newCategoryDto.reference}
        onChange={handleFormValues}
      />

      <LoadingButton
        variant="contained"
        sx={{ padding: '0.625rem 5rem' }}
        onClick={() => createCategory()}
        loading={isCreateCategoryLoading}
      >
        Save
      </LoadingButton>
      <AlertDialog
        isOpen={isAlertOpen}
        onClose={handleCloseAlert}
        title={alertTitle}
        severity={alertSeverity}
      />
    </Box>
  );
};
