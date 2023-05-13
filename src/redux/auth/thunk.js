import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentUser, loginUser } from 'service/fetchBackend';

export const loginThunk = createAsyncThunk('auth/login', async user => {
  return await loginUser(user);
});

export const currentUserThunk = createAsyncThunk(
  '/users/current',
  async (_, thunkAPI) => {
    if (thunkAPI.getState().login.token !== '') {
      return await getCurrentUser(thunkAPI.getState().login.token);
    } else {
      return;
    }
  }
);
