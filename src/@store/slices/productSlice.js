import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "services/Product.service";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (args) => {
    const response = await ProductService.fetchProducts(args);
    return response.data;
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (args) => {
    const response = await ProductService.fetchProductById(args);
    return response.data;
  }
);

export const fetchAllCategories = createAsyncThunk(
  "products/fetchAllCategories",
  async () => {
    const response = await ProductService.fetchAllCategories();
    return response.data;
  }
);

const initialState = {
  products: [],
  product: null,
  sort: false,
  isLoading: false,
  categories: [],
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
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, payload) => {
        state.isLoading = false;
      });

    builder
      .addCase(fetchProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      .addCase(fetchAllCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchAllCategories.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setSorting } = productSlice.actions;

export default productSlice.reducer;
