import { useState } from 'react';
import { useMutation } from 'react-query';
import { storeApi } from '../api/store.api';
import { LoginFormDTO, ErrorObject } from '../models/models';

const initialLoginFormDTO: LoginFormDTO = {
  username: '',
  password: '',
};

export const UseAuthenticateUserHook = () => {
  const [loginFormDTO, setLoginFormDTO ] = useState(initialLoginFormDTO);

  const { 
    mutate: authenticateUser,
    data: isAuthenticated,
    isLoading: isQueryLoading,
    isSuccess: isQuerySuccess,
    isError: isQueryError,
    error: errorStatus,
   } = useMutation<boolean, ErrorObject>(storeApi.authenticateUser(loginFormDTO));

  const handleFormValues = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setLoginFormDTO((prev) => {
      const stateCopy = { ...prev };

      stateCopy[event.target.name] = event.target.value.trim();

      return stateCopy;
    });
  };

  
  return {
    authenticateUser,
    isAuthenticated,
    handleFormValues,
    isQueryLoading,
    isQuerySuccess,
    isQueryError,
    errorStatus,
    loginFormDTO
  }
};
