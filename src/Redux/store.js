import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Redux/cartSlice";
import authReducer from "../Redux/authSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});
