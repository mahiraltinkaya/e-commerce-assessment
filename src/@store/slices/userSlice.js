import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  cart: [],
  token: null,
  favorites: [],
  mode: "light",
  isLoading: false,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addCart(state, action) {
      if (state.cart.some((x) => x.id === action.payload.id)) {
        state.cart = state.cart.map((x) => {
          if (x.id === action.payload.id) x.qty += 1;
          return x;
        });
      } else {
        state.cart.push(action.payload);
      }
    },
    deleteCart(state, action) {
      state.cart = state.cart.filter((x) => x.id !== action.payload.id);
    },
    destroyCart(state) {
      state.cart = [];
    },
    destroySession(state) {
      state.user = null;
      state.token = null;
    },
    setUser(state, { payload }) {
      state.user = payload;
    },
    addFavorites(state, { payload }) {
      state.favorites.push(payload);
    },
    setMode(state, action) {
      state.mode = action.payload;
    },
    login(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const {
  setUser,
  addFavorites,
  addCart,
  deleteCart,
  setMode,
  destroyCart,
  login,
  destroySession,
} = userSlice.actions;

export default userSlice.reducer;
