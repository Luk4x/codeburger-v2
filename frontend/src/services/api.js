import axios from 'axios';

export const codeBurgerAPI = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

codeBurgerAPI.interceptors.request.use(config => {
  const userData = localStorage.getItem('user');

  if (userData) {
    const { token } = JSON.parse(userData);
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
