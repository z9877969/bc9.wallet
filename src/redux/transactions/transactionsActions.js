import { createAction } from "@reduxjs/toolkit";
import types from "./transactionsActionTypes";

export const addCostsRequests = createAction("transactions/addCostsRequests");
export const addCostsSuccess = createAction("transactions/addCostsSuccess");
export const addCostsError = createAction("transactions/addCostsError");

export const addIncomesRequests = createAction(
  "transactions/addIncomesRequests"
);
export const addIncomesSuccess = createAction("transactions/addIncomesSuccess");
export const addIncomesError = createAction("transactions/addIncomesError");

export const getCostsRequests = createAction("transactions/getCostsRequests");
export const getCostsSuccess = createAction("transactions/getCostsSuccess");
export const getCostsError = createAction("transactions/getCostsError");

export const getIncomesRequests = createAction(
  "transactions/getIncomesRequests"
);
export const getIncomesSuccess = createAction("transactions/getIncomesSuccess");
export const getIncomesError = createAction("transactions/getIncomesError");

export const editCostsRequests = createAction("transactions/editCostsRequests");
export const editCostsSuccess = createAction("transactions/editCostsSuccess");
export const editCostsError = createAction("transactions/editCostsError");

export const editIncomesRequests = createAction(
  "transactions/editIncomesRequests"
);
export const editIncomesSuccess = createAction(
  "transactions/editIncomesSuccess"
);
export const editIncomesError = createAction("transactions/editIncomesError");

export const setIncomesType = createAction("transactions/setIncomesType");
export const setCostsType = createAction("transactions/setCostsType");
export const resetType = createAction("transactions/resetType");

export const setTransId = createAction("transactions/setTransId");
export const resetTransId = createAction("transactions/resetTransId");
