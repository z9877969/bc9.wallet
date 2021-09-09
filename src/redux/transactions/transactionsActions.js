import { createAction } from "@reduxjs/toolkit";
import types from "./transactionsActionTypes";

export const addCosts = createAction(types.ADD_COSTS);

export const addIncomes = createAction(types.ADD_INCOMES);

export const addCostsRequests = createAction("transactions/addCostsRequests");
export const addCostsSuccess = createAction("transactions/addCostsSuccess");
export const addCostsError = createAction("transactions/addCostsError");

export const addIncomesRequests = createAction("transactions/addIncomesRequests");
export const addIncomesSuccess = createAction("transactions/addIncomesSuccess");
export const addIncomesError = createAction("transactions/addIncomesError");

export const getCostsRequests = createAction("transactions/getCostsRequests");
export const getCostsSuccess = createAction("transactions/getCostsSuccess");
export const getCostsError = createAction("transactions/getCostsError");

export const getIncomesRequests = createAction("transactions/getIncomesRequests");
export const getIncomesSuccess = createAction("transactions/getIncomesSuccess");
export const getIncomesError = createAction("transactions/getIncomesError");



