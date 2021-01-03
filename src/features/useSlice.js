import { createSlice } from '@reduxjs/toolkit';

const initialUser = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null 

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: initialUser,
  },
  reducers: {
    login: (state, action) => {
      state.user= action.payload
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
    logout: state => {
      state.user= null
      localStorage.removeItem('user');
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = state => state.user.user;

export default userSlice.reducer;
