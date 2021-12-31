import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import { userApi } from "../../api/userApi";
import {
  error,
  getAllUsersBySaga,
  getProfileBySaga,
  searchUserBySaga,
  updateProfileBySaga,
} from "./userSlice";

export function* getProfileSaga() {
  try {
    const res = yield call(userApi.getProfile);
    yield put({
      type: getProfileBySaga.type,
      payload: res,
    });
  } catch (errors) {
    yield put({
      type: error.type,
      payload: errors.response.data.error,
    });
  }
}
export function* updateProfileSaga(action) {
  try {
    const {body, history} = action.payload;
    const res = yield call(userApi.updateProfile, body);
    yield put({
      type: updateProfileBySaga.type,
      payload: res,
    });
    toast.success("Profile has been changed!");
    history.push("/");
  } catch (errors) {
    toast.error(`${errors.response.data.error}!`);
    yield put({
      type: error.type,
      payload: errors.response.data.error,
    });
  }
}
export function* getAllUserSaga() {
  try {
    const res = yield call(userApi.getAll);
    yield put({
      type: getAllUsersBySaga.type,
      payload: res,
    });
  } catch (errors) {
    yield put({
      type: error.type,
      payload: errors.response.data.error,
    });
  }
}
export function* searchUserSaga(action) {
  try {
    const search = action.payload;
    const res = yield call(userApi.searchUser, search);
    yield put({
      type: searchUserBySaga.type,
      payload: res,
    });
  } catch (errors) {
    yield put({
      type: error.type,
      payload: errors.response.data.errors,
    });
  }
}
