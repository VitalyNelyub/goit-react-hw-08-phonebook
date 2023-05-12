// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL_API = 'https://connections-api.herokuapp.com';

const addToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const removeToken = token => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const createNewUser = async newUser => {
  const user = await axios.post(`${BASE_URL_API}/users/signup`, newUser);
  // console.log(user.token)
  return user;
};

export const loginUser = async user => {
  const { data } = await axios.post(`${BASE_URL_API}/users/login`, user);
  addToken(data.token);
  console.log(data.token);
  return data;
};

// export const logOut = async user => {
//   const { data } = await axios.post(`${BASE_URL_API}/users/logout`, user);
//   removeToken(data.token);
//   console.log(data.token);
//   return data;
// };

export const getCurrentUser = async () => {
  const { data } = await axios.get(`${BASE_URL_API}/users/current`);
  console.log(data);
  return data;
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
