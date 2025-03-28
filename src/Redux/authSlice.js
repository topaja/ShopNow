import { createSlice } from "@reduxjs/toolkit";
import { clearCart } from "./cartSlice"; 

const initialState = {
  isAuthenticated: false,
  user: null,
  users: [
    {
      id: 1,
      name: "User",
      email: "test@example.com",
      password: "123456",
      phone: "1234567890",
    },
  ], // Store registered users
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    register: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

// Create a thunk to handle logout and cart clearing
export const logoutAndClearCart = () => (dispatch) => {
  dispatch(logout());
  dispatch(clearCart());
};

export const { login, logout, register } = authSlice.actions;
export default authSlice.reducer;