import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { userInfo: null };

export const loginInfo = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    try {
      const response = await axios.post("http://localhost:3000/auth/login",{ email,password});
      console.log(response.data.data)
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);

export const SignUp = createAsyncThunk("auth/SignUp", async () => {
  try {
    const response = await axios.get("http://localhost:3000/auth/create-user");
    return response.data;
  } catch (err) {
    throw err;
  }
});

export const fetchUserInfo = createAsyncThunk(
  "products/fetchUserInfo",
  async (search) => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products/search?q=" + search
      );
      return response.data.products;
    } catch (error) {
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginInfo.pending, (state) => {
      state.loading = true;
    });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
