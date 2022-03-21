import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { storeApi } from '../api/store.api';
import { Category, NewCategoryDto } from '../models/models';

const initialNewCategoryDto: NewCategoryDto = {
  name: '',
  reference: '',
};

export const UseInsertNewCategoryHook = () => {
  const queryClient = useQueryClient();

  const [newCategoryDto, setNewCategoryDto] = useState(initialNewCategoryDto);

  const handleFormValues = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setNewCategoryDto((prev) => {
      const stateCopy = { ...prev };

      stateCopy[event.target.name] = event.target.value.trim();

      return stateCopy;
    });
  };

  const {
    mutate: createCategory,
    isSuccess: isCreateCategorySuccess,
    isLoading: isCreateCategoryLoading,
    isError: isCreateCategoryError,
  } = useMutation<Category>(storeApi.insertCategory(newCategoryDto), {
    onSuccess: () => {
      queryClient.invalidateQueries('categories');
    },
  });

  return {
    createCategory,
    isCreateCategorySuccess,
    isCreateCategoryLoading,
    isCreateCategoryError,
    handleFormValues,
    newCategoryDto,
  };
};
