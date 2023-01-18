import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "services/Product.service";

const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (args, ThunkAPI) => {
    const response = await ProductService.fetchProducts();
    return response.data;
  }
);

const initialState = {
  products: [],
  sort: false,
  isLoading: false,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSorting(state, { payload }) {
      state.sort = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        console.log(action);
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, payload) => {
        state.isLoading = false;
      });
  },
});

export const { setSorting } = productSlice.actions;

export default productSlice.reducer;

export { fetchProducts };
