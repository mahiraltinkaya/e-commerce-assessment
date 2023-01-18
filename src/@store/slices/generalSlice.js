import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  snackbar: false,
};

export const generalSlice = createSlice({
  name: "generals",
  initialState,
  reducers: {
    setToggle(state, { payload }) {
      state.toggle = payload;
    },
    openSnackbar(state, { payload }) {
      state.snackbar = true;
    },
  },
});

export const { setToggle, openSnackbar } = generalSlice.actions;

export default generalSlice.reducer;
