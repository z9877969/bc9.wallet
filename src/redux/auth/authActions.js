import { createAction } from "@reduxjs/toolkit";

export const userRegisterRequest = createAction("auth/userRegisterRequest");
export const userRegisterSuccess = createAction("auth/userRegisterSuccess");
export const userRegisterError = createAction("auth/userRegisterError");

export const userLoginRequest = createAction("auth/userLoginRequest");
export const userLoginSuccess = createAction("auth/userLoginSuccess");
export const userLoginError = createAction("auth/userLoginError");

export const userLogout = createAction("auth/userLogoyt")
