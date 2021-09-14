import {
  getCurUserApi,
  userLoginApi,
  userRegisterApi,
} from "../../utils/api/apiServices";
import {
  userRegisterRequest,
  userRegisterSuccess,
  userRegisterError,
  userLoginRequest,
  userLoginSuccess,
  userLoginError,
  getCurUserRequest,
  getCurUserSuccess,
  getCurUserError,
} from "./authActions";

export const userRegister = (userData) => (dispatch) => {
  dispatch(userRegisterRequest());

  userRegisterApi(userData)
    .then((userRes) => dispatch(userRegisterSuccess(userRes)))
    .catch((err) => dispatch(userRegisterError(err)));
};

export const userLogin = (userData) => (dispatch) => {
  dispatch(userLoginRequest());

  userLoginApi(userData)
    .then((userRes) => dispatch(userLoginSuccess(userRes)))
    .catch((err) => dispatch(userLoginError(err)));
};

export const getCurUser = () => (dispatch, getState) => {
  dispatch(getCurUserRequest());

  const { idToken } = getState().auth.user;

  getCurUserApi(idToken)
    .then((userRes) => dispatch(getCurUserSuccess(userRes)))
    .catch((err) => dispatch(getCurUserError(err)));
};
