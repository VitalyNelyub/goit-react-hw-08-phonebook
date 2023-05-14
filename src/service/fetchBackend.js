import axios from 'axios';
import { Notify } from 'notiflix';

const axiosApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const addToken = token => {
  axiosApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeToken = () => {
  axiosApi.defaults.headers.common.Authorization = '';
};

export const createNewUser = async newUser => {
  const user = await axiosApi.post(`/users/signup`, newUser);
  addToken(user.data.token);
  Notify.success('User created, pleasse LOG IN!');
  return user;
};

export const getCurrentUser = async token => {
  try {
    addToken(token);
    const currentUser = await axiosApi.get('/users/current');
    return currentUser.data;
  } catch (error) {
    return;
  }
};

export const loginUser = async user => {
  const loginedUser = await axiosApi.post(`/users/login`, user);
  addToken(loginedUser.data.token);
  Notify.success('Welcome!');
  return loginedUser.data;
};

export const logOut = async user => {
  const logOutUser = await axiosApi.post(`/users/logout`, user);
  removeToken(logOutUser.data.token);
  return logOutUser.data;
};

export const getContactsApi = async token => {
  addToken(token);
  const contacts = await axiosApi.get('/contacts');
  return contacts.data;
};

export const createContactsApi = async (contact, token) => {
  addToken(token);
  const contacts = await axiosApi.post(`/contacts`, contact);
  return contacts.data;
};

export const deleteContactsApi = async id => {
  const result = await axiosApi.delete(`/contacts/${id}`);
  return result.data.id;
};
