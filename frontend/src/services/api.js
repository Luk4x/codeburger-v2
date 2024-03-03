import axios from 'axios';

export const codeBurgerAPI = axios.create({
  baseURL: 'https://codeburger-v2-production.up.railway.app'
});

codeBurgerAPI.interceptors.request.use(config => {
  const userData = localStorage.getItem('user');

  if (userData) {
    const { token } = JSON.parse(userData);
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
