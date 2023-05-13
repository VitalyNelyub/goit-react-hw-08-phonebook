import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentUser, loginUser } from 'service/fetchBackend';

export const loginThunk = createAsyncThunk('auth/login', async user => {
  return await loginUser(user);
});

export const currentUserThunk = createAsyncThunk('/users/current', async (_, thunkAPI) => {
  // console.log(thunkAPI.getState())
  return await getCurrentUser(thunkAPI.getState().login.token);
});
