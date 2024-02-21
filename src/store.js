import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slice/slice";
import authReducer from "./slice/userSlice";
export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    auth: authReducer,
  },
});
