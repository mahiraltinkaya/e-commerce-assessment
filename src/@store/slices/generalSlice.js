import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  snackbar: false,
  cc: null,
  shipment: null,
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
    setShipment(state, action) {
      state.shipment = action.payload;
    },
    setCC(state, action) {
      state.cc = action.payload;
    },
  },
});

export const { setToggle, openSnackbar, setShipment, setCC } =
  generalSlice.actions;

export default generalSlice.reducer;
