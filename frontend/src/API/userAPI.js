import { $authHost, $host } from './index';
import jwt_decode from 'jwt-decode';

export const registration = async (email, password) => {
  const response = await $host.post('api/user/registration', {
    Email: email,
    Password: password,
  });
  localStorage.setItem('jwtToken', response.data.token);
  return jwt_decode(response.data.token);
};

export const login = async (email, password) => {
  const response = await $host.post('api/user/login', {
    Email: email,
    Password: password,
  });
  console.log('response', response);
  localStorage.setItem('jwtToken', response.data.token);
  return jwt_decode(response.data.token);
};
export const check = async () => {
  const response = await $authHost.get('api/user/auth');
  localStorage.setItem('jwtToken', response.data.token);
  return jwt_decode(response.data.token);
};

export const logout = () => {
  localStorage.removeItem('jwtToken');
};

export const getUserById = async (id, user) => {
  console.log(user);
  const response = await $authHost.get(`api/user/${id}`, user);
  return response.data;
};
export const updateUserById = async (id, user) => {
  console.log(user);
  const response = await $authHost.put(`api/user/${id}`, user);
  return response.data;
};
