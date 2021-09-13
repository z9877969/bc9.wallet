import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import transactions from "./transactions/transactionsReducer";
import categories from "./categories/categoriesReducer";
import error from "./error/errorReducer";
import history from "./history/historyReducer";
import auth from "./auth/authReducer";

const transactionsPersistConfig = {
  key: "transactions",
  version: 1,
  storage,
};

const categoriesPersistConfig = {
  key: "categories",
  version: 1,
  storage,
};

const store = configureStore({
  reducer: {
    auth,
    transactions,
    categories: persistReducer(categoriesPersistConfig, categories),
    history,
    error,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
