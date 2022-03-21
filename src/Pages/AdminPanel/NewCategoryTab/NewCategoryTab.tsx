import { Box, Button, TextField } from "@mui/material";

import styles from './NewCategoryTab.module.css';

export const NewCategoryTab = () => {
  return (
    <Box className={styles.NewCategoryTab}>
      <TextField
        label="Category Name"
        name="name"
        fullWidth
      />

      <TextField
        label="Category Reference"
        name="reference"
        fullWidth
      />

      <Button
        variant="contained"
        sx={{ padding: '0.625rem 5rem' }}
      >
        Save
      </Button>
  </Box>
  );
}