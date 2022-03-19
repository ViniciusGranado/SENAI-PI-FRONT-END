import { useState } from 'react';
import { useMutation } from 'react-query';
import { storeApi } from '../api/store.api';
import { NewUserDTO } from '../models/models';

const initialNewUserDTO: NewUserDTO = {
  name: '',
  email: '',
  username: '',
  password: '',
};

export const UseSaveNewUserHook = () => {
  const [newUserDTO, setNewUserDTO] = useState(initialNewUserDTO);

  const { mutate: saveNewUser } = useMutation(storeApi.saveNewUser(newUserDTO));

  const handleFormValues = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setNewUserDTO((prev) => {
      const stateCopy = { ...prev };

      stateCopy[event.target.name] = event.target.value.trim();

      return stateCopy;
    });
  };

  
  return {
    saveNewUser,
    handleFormValues,
  }
};
