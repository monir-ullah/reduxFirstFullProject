import { configureStore } from "@reduxjs/toolkit";
import authInfoReducer from "../redux/auth/authSlice";
import storage from "redux-persist/lib/storage";
import { authAPI } from "./auth/api/authAPI";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
  persistStore,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authInfoReducer);
export const store = configureStore({
  reducer: {
    authInfo: persistedReducer,
    [authAPI.reducerPath]: authAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
