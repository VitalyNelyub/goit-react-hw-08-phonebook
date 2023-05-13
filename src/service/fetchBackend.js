// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL_API = 'https://connections-api.herokuapp.com';

const addToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const createNewUser = async newUser => {
  const user = await axios.post(`${BASE_URL_API}/users/signup`, newUser);
  addToken(user.data.token);
  // console.log(user.token)
  return user;
};

export const getCurrentUser = async () => {
  try {
    const currentUser = await axios.get(`${BASE_URL_API}/users/current`);
    // console.log(data);
    return currentUser.data;
  } catch (error) {
    return;
  }
};

export const loginUser = async user => {
  const loginedUser = await axios.post(`${BASE_URL_API}/users/login`, user);
  addToken(loginedUser.data.token);
  // console.log(loginedUser.data.token);
  return loginedUser.data;
};

export const logOut = async user => {
  const logOutUser = await axios.post(`${BASE_URL_API}/users/logout`, user);
  removeToken(logOutUser.data.token);
  console.log(logOutUser.data.token);
  return logOutUser.data;
};

// export const register = createAsyncThunk(
//   'auth/register',
//   async (credentials, thunkAPI) => {
//     try {
//       const res = await axios.post('/users/signup', credentials);
//       setAuthHeader(res.data.token);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
