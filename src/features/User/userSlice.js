import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  user: {
    email: "",
    firstName: "",
    lastName: "",
    role: "",
    phoneNumber: "",
  },
  err: "",
  isMenuOpen: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getProfile: (state) => {
      return state;
    },
    updateProfile: (state) => {
      return state;
    },
    getAllUsers: (state) => {
      return state;
    },
    searchUser: (state) => {
      return state;
    },
    getProfileBySaga: (state, action) => {
      state.user = action.payload.user;
    },
    updateProfileBySaga: (state, action) => {
      state.user = action.payload.user;
    },
    toggleDashboardMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    getAllUsersBySaga: (state, action) => {
      state.users = action.payload.users;
    },
    searchUserBySaga: (state, action) => {
      state.users = action.payload.users;
    },
    error: (state, action) => {
      state.err = action.payload.error;
    },
  },
});

export const {
  getProfile,
  getProfileBySaga,
  toggleDashboardMenu,
  updateProfile,
  accountChange,
  updateProfileBySaga,
  error,
  getAllUsers,
  getAllUsersBySaga,
  searchUserBySaga,
  searchUser,
} = userSlice.actions;

export default userSlice.reducer;
