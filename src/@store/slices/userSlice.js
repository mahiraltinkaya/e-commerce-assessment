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
    setUser(state, { payload }) {
      state.user = payload;
    },
    addFavorites(state, { payload }) {
      state.favorites.push(payload);
    },
  },
});

export const { setUser, addFavorites, addCart, deleteCart } = userSlice.actions;

export default userSlice.reducer;
