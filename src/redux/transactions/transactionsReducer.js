// import { combineReducers } from "redux";
import { combineReducers, createReducer } from "@reduxjs/toolkit";
import types from "./transactionsActionTypes";


const costsReducer = createReducer([], {
  [types.ADD_COSTS]: (state, {payload}) => [...state, payload]
});

const incomesReducer = createReducer([], {
  [types.ADD_INCOMES]: (state, {payload}) => [...state, payload]
})

const transactionsReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesReducer,
});

export default transactionsReducer;
