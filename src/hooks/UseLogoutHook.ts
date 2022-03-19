import { useNavigate } from 'react-router-dom';

export const UseLogoutHook = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');

    navigate('/');
  }

  return {
    logout,
  }
}