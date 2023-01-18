import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import { setupListeners } from "@reduxjs/toolkit/query";

import generalSlice from "./slices/generalSlice";
import userSlice from "./slices/userSlice";
import productSlice from "./slices/productSlice";

const userPersist = {
  key: "users",
  storage,
};

const reducers = combineReducers({
  products: productSlice,
  generals: generalSlice,
  users: persistReducer(userPersist, userSlice),
});

const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(),
});

setupListeners(store.dispatch);
const { dispatch } = store;

const persisted = persistStore(store);

export { store, persisted, dispatch, useDispatch, useSelector };
