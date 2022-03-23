import { useNavigate } from 'react-router-dom';

export const useLogoutHook = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    localStorage.removeItem('clientId');

    navigate('/');
  };

  return {
    logout,
  };
};
