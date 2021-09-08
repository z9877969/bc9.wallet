// import { combineReducers } from "redux";
import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addCostsSuccess,
  addIncomesSuccess,
  getCostsSuccess,
  getIncomesSuccess,
} from "./transactionsActions";
import types from "./transactionsActionTypes";

const costsReducer = createReducer([], {
  [addCostsSuccess]: (state, { payload }) => [...state, payload],
  [getCostsSuccess]: (_, { payload }) => payload,
});

const incomesReducer = createReducer([], {
  [addIncomesSuccess]: (state, { payload }) => [...state, payload],
  [getIncomesSuccess]: (_, { payload }) => payload,
});

const transactionsReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesReducer,
});

export default transactionsReducer;
