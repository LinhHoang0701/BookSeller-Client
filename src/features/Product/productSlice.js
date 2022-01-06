import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: [],
  product: {},
  products: [],
  page: 0,
  pages: 0,
  totalProducts: 0,
  filter: {
    name: "all",
    min: 1,
    max: 500,
    order: 0,
    pageNumber: 1,
    sortOrder: { _id: -1 },
  },
  err: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct: (state) => {
      return state;
    },
    addProduct: (state) => {
      return state;
    },
    editProduct: (state) => {
      return state;
    },
    getItem: (state) => {
      return state;
    },
    search: (state) => {
      return state;
    },
    deleteProduct: (state) => {
      return state;
    },
    changeFilter: (state, action) => {
      state.page = action.payload.page;
    },
    getProductBySaga: (state, action) => {
      state.products = action.payload.products;
      state.page = action.payload.page;
      state.pages = action.payload.pages;
      state.totalProducts = action.payload.totalProducts;
    },
    getProductBySlug: (state, action) => {
      state.product = action.payload.product;
    },
    addProductBySaga: (state, action) => {},
    editProductBySaga: (state, action) => {},
    deleteProductBySaga: (state, action) => {},
    searchProduct: (state, action) => {
      state.search = action.payload;
    },
    rangePrice: (state, action) => {
      state.filter.min = action.payload[0];
      state.filter.max = action.payload[1];
    },
    error: (state, action) => {
      state.err = action.payload.error;
    },
  },
});

export const {
  getProduct,
  getProductBySaga,
  searchProduct,
  getProductBySlug,
  error,
  getItem,
  search,
  rangePrice,
  addProduct,
  editProduct,
  editProductBySaga,
  addProductBySaga,
  deleteProduct,
  deleteProductBySaga,
  changeFilter,
} = productSlice.actions;

export default productSlice.reducer;
