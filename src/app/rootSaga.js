import { debounce, takeLatest, takeLeading } from "redux-saga/effects";
import {
  loginSaga,
  registerSaga,
  resetPasswordSaga,
} from "../features/Auth/authSaga";
import { createUser, getUser, reset } from "../features/Auth/authSlice";
import {
  addProductSaga,
  deleteProductSaga,
  editProductSaga,
  getProductBySlugSaga,
  getProductSaga,
  searchProductSaga,
} from "../features/Product/productSaga";
import {
  addProduct,
  editProduct,
  getItem,
  getProduct,
  search,
  deleteProduct,
} from "../features/Product/productSlice";
import {
  getAllUserSaga,
  getProfileSaga,
  searchUserSaga,
  updateProfileSaga,
} from "../features/User/userSaga";
import {
  getAllUsers,
  getProfile,
  searchUser,
  updateProfile,
} from "../features/User/userSlice";

export function* rootSaga() {
  yield takeLatest(getUser().type, loginSaga);

  //REGISTER

  yield takeLatest(createUser().type, registerSaga);
  yield takeLatest(reset().type, resetPasswordSaga);

  //USER
  yield takeLeading(getProfile().type, getProfileSaga);
  yield takeLeading(getAllUsers().type, getAllUserSaga);
  yield takeLeading(updateProfile().type, updateProfileSaga);
  yield takeLeading(searchUser().type, searchUserSaga);

  //PRODUCT
  yield takeLeading(getProduct().type, getProductSaga);
  yield takeLeading(getItem().type, getProductBySlugSaga);
  yield debounce(1000, search().type, searchProductSaga);
  yield takeLeading(addProduct().type, addProductSaga);
  yield takeLeading(editProduct().type, editProductSaga);
  yield takeLeading(deleteProduct().type, deleteProductSaga);
}
