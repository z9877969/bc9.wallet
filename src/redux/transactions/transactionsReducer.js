import { combineReducers, createReducer } from "@reduxjs/toolkit";
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
});

const incomesReducer = createReducer([], {
  [addIncomesSuccess]: (state, { payload }) => [...state, payload],
  [getIncomesSuccess]: (_, { payload }) => payload,
});

const transTypeReducer = createReducer("", {
  [setIncomesType]: () => "incomes",
  [setCostsType]: () => "costs",
  [resetType]: () => "",
});

const transactionsReducer = combineReducers({
  data: combineReducers({
    costs: costsReducer,
    incomes: incomesReducer,
  }),
  transType: transTypeReducer,
});

export default transactionsReducer;
