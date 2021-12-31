import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  },
  token: "",
  formErrors: {},
  isSubmitting: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUser: (state) => {
      return state;
    },

    createUser: (state) => {
      return state;
    },
    getToken: (state, action) => {
      state.token = action.payload;
    },
    reset: (state) => {
      return state;
    },

    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("token", state.token);
    },

    register: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("token", state.token);
    },
    logout: (state) => {
      state.token = "";
      localStorage.clear();
    },

    resetPasswordBySaga: (state) => {},

    err: (state, action) => {
      state.formErrors = action.payload;
    },
  },
});

export const {
  getUser,
  createUser,
  login,
  logout,
  register,
  getToken,
  err,
  reset,
  resetPasswordBySaga,
} = authSlice.actions;

export default authSlice.reducer;
