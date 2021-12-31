import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import { loginApi, registerApi, resetPasswordApi } from "../../api/authApi";
import { err, login, register, resetPasswordBySaga } from "./authSlice";

export function* loginSaga(action) {
  try {
    const { values, history } = action.payload;
    const res = yield call(loginApi.login, values);
    yield put({
      type: login.type,
      payload: res,
    });
    toast.success("Login successed!");
    history.push("/home");
  } catch (errors) {
    toast.error(`${errors.response.data.error}!`);
    yield put({
      type: err.type,
      payload: errors.response.data.error,
    });
  }
}

export function* registerSaga(action) {
  try {
    const { values, history } = action.payload;
    const res = yield call(registerApi.register, values);
    yield put({
      type: register.type,
      payload: res,
    });
    toast.success("Sign up successed!");
    history.push("/home");
  } catch (errors) {
    toast.error(`${errors.response.data.error}!`);
    yield put({
      type: err.type,
      payload: errors.response.data.error,
    });
  }
}
export function* resetPasswordSaga(action) {
  try {
    const { values, history } = action.payload;
    const res = yield call(resetPasswordApi.reset, values);
    yield put({
      type: resetPasswordBySaga.type,
      payload: res,
    });
    toast.success("Password has been changed!");
    history.push("/home");
  } catch (errors) {
    toast.error(`${errors.response.data.error}!`);
    yield put({
      type: err.type,
      payload: errors.response.data.errors,
    });
  }
}
