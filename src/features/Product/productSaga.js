import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import { productApi } from "../../api/productApi";
import {
  addProductBySaga,
  deleteProductBySaga,
  editProductBySaga,
  error,
  getProductBySaga,
  getProductBySlug,
  searchProduct,
} from "./productSlice";

export function* getProductSaga(action) {
  try {
    const data = action.payload;
    const res = yield call(productApi.getListProduct, data);
    yield put({
      type: getProductBySaga.type,
      payload: res,
    });
  } catch (errors) {
    yield put({
      type: error.type,
      payload: errors.response.data.errors,
    });
  }
}
export function* getProductBySlugSaga(action) {
  try {
    const slug = action.payload;
    const res = yield call(productApi.getProductBySlug, slug);
    yield put({
      type: getProductBySlug.type,
      payload: res,
    });
  } catch (errors) {
    yield put({
      type: error.type,
      payload: errors.response.data.errors,
    });
  }
}
export function* searchProductSaga(action) {
  try {
    const name = action.payload;
    const res = yield call(productApi.searchProduct, name);
    yield put({
      type: searchProduct.type,
      payload: res,
    });
  } catch (errors) {
    yield put({
      type: error.type,
      payload: errors.response.data.errors,
    });
  }
}
export function* addProductSaga(action) {
  try {
    const { values, history } = action.payload;
    const res = yield call(productApi.addProduct, values);
    yield put({
      type: addProductBySaga.type,
      payload: res,
    });
    toast.success("Product has been added!");
    history.push("/dashboard/product");
  } catch (errors) {
    toast.error(`${errors.response.data.error}!`);
    yield put({
      type: error.type,
      payload: errors.response.data.error,
    });
  }
}
export function* editProductSaga(action) {
  try {
    const { values, id, history } = action.payload;
    const res = yield call(productApi.editProduct, { values, id });
    yield put({
      type: editProductBySaga.type,
      payload: res,
    });
    toast.success("Product has been changed!");
    history.push("/dashboard/product");
  } catch (errors) {
    toast.error(`${errors.response.data.error}!`);
    yield put({
      type: error.type,
      payload: errors.response.data.errors,
    });
  }
}
export function* deleteProductSaga(action) {
  try {
    const { id, history } = action.payload;
    const res = yield call(productApi.deleteProduct, id);
    yield put({
      type: deleteProductBySaga.type,
      payload: res,
    });
    toast.success("Product has been deleted!");
    history.push("/dashboard/product");
  } catch (errors) {
    toast.error(`${errors.response.data.error}!`);
    yield put({
      type: error.type,
      payload: errors.response.data.errors,
    });
  }
}
