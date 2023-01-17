import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

import generalSlice from "./slices/generalSlice";
import userSlice from "./slices/userSlice";
import productSlice from "./slices/productSlice";

const persistConfig = {
  key: "x",
  storage,
};

const reducers = combineReducers({
  users: persistReducer(persistConfig, userSlice),
  products: productSlice,
  generals: generalSlice,
});

const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

const persisted = persistStore(store);

export { store, persisted };
