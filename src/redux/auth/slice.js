import { currentUserThunk, loginThunk } from './thunk';

const { createSlice } = require('@reduxjs/toolkit');
const { initialStateBackend } = require('redux/initials');

const hendlePending = (state, action) => {
  state.isLoading = true;
};
const hendleFulfilled = (state, action) => {
  state.isLoading = false;
  state.token = action.payload.token;
  state.error = '';
};
const hendleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const hendleCurrentUserFulfilled = (state, action) => {
  state.isLoading = false;
  state.user = action.payload;
  state.error = '';
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateBackend,
  reducers: {
    logOut(state, action) {
      state.user = null;
      state.token = ''
    },
  },
  extraReducers: builder =>
    builder
      .addCase(loginThunk.pending, hendlePending)
      .addCase(loginThunk.fulfilled, hendleFulfilled)
      .addCase(loginThunk.rejected, hendleRejected)
      .addCase(currentUserThunk.pending, hendlePending)
      .addCase(currentUserThunk.fulfilled, hendleCurrentUserFulfilled)
      .addCase(currentUserThunk.rejected, hendleRejected),
});

export const authReducer = authSlice.reducer;
export const { logOut } = authSlice.actions;
