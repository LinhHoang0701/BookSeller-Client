import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import authSlice from "../features/Auth/authSlice";
import productSlice from "../features/Product/productSlice";
import userSlice from "../features/User/userSlice";
import { rootSaga } from "./rootSaga";

const rootReducer = combineReducers({
  auth: authSlice,
  user: userSlice,
  product: productSlice,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
// run saga
sagaMiddleware.run(rootSaga);
