import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { userLogout } from "../auth/authActions";
import {
  addCostsSuccess,
  addIncomesSuccess,
  getCostsSuccess,
  getIncomesSuccess,
  resetType,
  setCostsType,
  setIncomesType,
} from "./transactionsActions";

const costsReducer = createReducer([], {
  [addCostsSuccess]: (state, { payload }) => [...state, payload],
  [getCostsSuccess]: (_, { payload }) => payload,
  [userLogout]: () => [],
});

const incomesReducer = createReducer([], {
  [addIncomesSuccess]: (state, { payload }) => [...state, payload],
  [getIncomesSuccess]: (_, { payload }) => payload,
  [userLogout]: () => [],
});

const transTypeReducer = createReducer("", {
  [setIncomesType]: () => "incomes",
  [setCostsType]: () => "costs",
  [resetType]: () => "",
  [userLogout]: () => "",
});

const transactionsReducer = combineReducers({
  data: combineReducers({
    costs: costsReducer,
    incomes: incomesReducer,
  }),
  transType: transTypeReducer,
});

export default transactionsReducer;
