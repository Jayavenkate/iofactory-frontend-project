import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../global";

const initialState = {
  user: "",
  isLoading: false,
  error: "",
  token: "",
};
//signup
export const signupuser = createAsyncThunk(
  "auth/signupuser",
  async (userdata, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${URL}/signup`, userdata);
      const jsonresponse = await response.data;
      console.log("adduserdata", jsonresponse);
      return jsonresponse;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
//login

export const loginuser = createAsyncThunk(
  "auth/loginuser",
  async (userdata, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${URL}/login`, userdata);
      const jsonresponse = await response.data;
      console.log("loginuserdata", jsonresponse);
      return jsonresponse;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    settoken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    cleartoken: (state) => {
      state.token = "";
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupuser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signupuser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.user = action.payload;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(signupuser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      });
  },
});
export default authSlice.reducer;
