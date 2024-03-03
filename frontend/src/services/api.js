import axios from 'axios';

export const codeBurgerAPI = axios.create({
  baseURL: 'http://localhost:3000'
});

codeBurgerAPI.interceptors.request.use(config => {
  const userData = localStorage.getItem('user');

  if (userData) {
    const { token } = JSON.parse(userData);
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
