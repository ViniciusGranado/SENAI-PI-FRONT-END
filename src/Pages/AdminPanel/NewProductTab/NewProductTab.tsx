import { LoadingButton } from '@mui/lab';
import {
  AlertColor,
  Box,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  TextField,
  Typography
} from '@mui/material';
import {
  ChangeEvent, useEffect, useState
} from 'react';
import { AlertDialog } from '../../../components/AlertDialog/AlertDialog';
import { useGetAllCategoriesHook } from '../../../hooks/UseGetAllCategoriesHook';
import { UseInsertNewProductHook } from '../../../hooks/UseInsertNewProductHook';
import styles from './NewProductTab.module.css';

export const NewProductTab = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<AlertColor | undefined>(
    undefined
  );
  const [alertTitle, setAlertTitle] = useState<string | undefined>(undefined);

  const { categories, isCategoriesLoading } = useGetAllCategoriesHook();

  const {
    createProduct,
    isCreateProductSuccess,
    isCreateProductLoading,
    isCreateProductError,
    newProductDto,
    setNewProductDto,
  } = UseInsertNewProductHook();

  useEffect(() => {
    if (isCreateProductSuccess) {
      setAlertSeverity('success');
      setAlertTitle('The Product was created!');
      handleOpenAlert();
    }
  }, [isCreateProductSuccess]);

  useEffect(() => {
    if (isCreateProductError) {
      setAlertSeverity('error');
      setAlertTitle('The Product was not created. Please try again.');
      handleOpenAlert();
    }
  }, [isCreateProductError]);

  const handleOpenAlert = () => {
    setIsAlertOpen(true);
  };

  const handleCloseAlert = () => {
    setIsAlertOpen(false);
  };

  const getForm = () => {
    return (
      <>
        <TextField
          label="Product Name"
          name="name"
          fullWidth
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setNewProductDto((prev) => {
              const stateCopy = { ...prev };

              stateCopy.name = event.target.value.trim();

              return stateCopy;
            })
          }
          value={newProductDto.name}
        />

        <TextField
          label="Product Description"
          name="description"
          fullWidth
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setNewProductDto((prev) => {
              const stateCopy = { ...prev };

              stateCopy.description = event.target.value.trim();

              return stateCopy;
            })
          }
          value={newProductDto.description}
        />

        <TextField
          label="Product Price"
          name="price"
          fullWidth
          type="number"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setNewProductDto((prev) => {
              const stateCopy = { ...prev };

              stateCopy.price = Number.parseFloat(event.target.value.trim());

              return stateCopy;
            })
          }
          value={newProductDto.price}
        />

        <TextField
          label="Image URL"
          name="imgUrl"
          fullWidth
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setNewProductDto((prev) => {
              const stateCopy = { ...prev };

              stateCopy.imgUrl = event.target.value.trim();

              return stateCopy;
            })
          }
          value={newProductDto.imgUrl}
        />

        <FormControlLabel
          control={<Checkbox />}
          label="Is Favorite"
          name="favorite"
          onChange={(_: any, checked: boolean) =>
            setNewProductDto((prev) => {
              const stateCopy = { ...prev };

              stateCopy.favorite = checked;

              return stateCopy;
            })
          }
        />

        <FormControl component="fieldset">
          <FormLabel component="legend">Categories</FormLabel>
          <FormGroup>
            {categories?.map((category) => {
              return (
                <FormControlLabel
                  control={<Checkbox name={category.reference} />}
                  label={category.name}
                  key={category.id}
                  onChange={(_: any, checked: boolean) => {
                    setNewProductDto((prev) => {
                      const stateCopy = { ...prev };

                      if (checked) {
                        stateCopy.categories.push(category);
                      } else {
                        stateCopy.categories = stateCopy.categories.filter(
                          (item) => item !== category
                        );
                      }

                      return stateCopy;
                    });
                  }}
                  value={newProductDto.categories.includes(category)}
                />
              );
            })}
          </FormGroup>
        </FormControl>

        <LoadingButton
          variant="contained"
          sx={{ padding: '0.625rem 5rem' }}
          onClick={() => createProduct()}
          loading={isCreateProductLoading}
        >
          Save
        </LoadingButton>
        <AlertDialog
          isOpen={isAlertOpen}
          onClose={handleCloseAlert}
          title={alertTitle}
          severity={alertSeverity}
        />
      </>
    );
  };

  const getContent = () => {
    if (isCategoriesLoading) {
      return <CircularProgress />;
    }

    if (!categories?.length) {
      return (
        <Typography>
          There are no listed categories. Please register a category before
          entering a product
        </Typography>
      );
    }

    return getForm();
  };
  return <Box className={styles.NewProductTab}>{getContent()}</Box>;
};
