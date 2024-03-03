import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const updateUser = data => {
    setUser(data);
    localStorage.setItem('user', JSON.stringify(data));
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/entrar');
  };

  return { user, updateUser, logout };
}
