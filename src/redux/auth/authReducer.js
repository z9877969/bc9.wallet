import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  userRegisterSuccess,
  userLoginSuccess,
  userLogout,
  getCurUserSuccess,
} from "./authActions";

const iS = {
  user: {
    email: "",
    localId: "",
    idToken: null,
    refreshToken: null,
  },
  isAuth: false,
};

const userReducer = createReducer(iS.user, {
  [userRegisterSuccess]: (
    _,
    { payload: { email, idToken, localId, refreshToken } }
  ) => ({ email, localId, idToken, refreshToken }),
  [userLoginSuccess]: (
    _,
    { payload: { email, idToken, localId, refreshToken } }
  ) => ({ email, localId, idToken, refreshToken }),
  [getCurUserSuccess]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  [userLogout]: () => iS.user,
});

const isAuthReducer = createReducer(iS.isAuth, {
  [userRegisterSuccess]: () => true,
  [userLoginSuccess]: () => true,
  [getCurUserSuccess]: () => true,
  [userLogout]: () => iS.isAuth,
});

const userPersistConfig = {
  key: "tokens",
  storage,
  whitelist: ["idToken", "refreshToken"],
};

const authReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  isAuth: isAuthReducer,
});

export default authReducer;
