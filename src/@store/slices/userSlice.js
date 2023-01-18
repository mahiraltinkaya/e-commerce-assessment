import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  cart: [],
  token: null,
  favorites: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.user = payload;
    },
    setFavorites(state, { payload }) {
      state.favorites.push(payload);
    },
  },
});

export const { setUser, setFavorites } = userSlice.actions;

export default userSlice.reducer;
