import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { userLogout } from "../auth/authActions";
import {
  addCostsSuccess,
  addIncomesSuccess,
  editCostsSuccess,
  editIncomesSuccess,
  getCostsSuccess,
  getIncomesSuccess,
  resetTransId,
  resetType,
  setCostsType,
  setIncomesType,
  setTransId,
} from "./transactionsActions";

const costsReducer = createReducer([], {
  [addCostsSuccess]: (state, { payload }) => [...state, payload],
  [getCostsSuccess]: (_, { payload }) => payload,
  [editCostsSuccess]: (state, { payload }) =>
    state.map((transaction) =>
      transaction.id === payload.id ? payload : transaction
    ),
  [userLogout]: () => [],
});

const incomesReducer = createReducer([], {
  [addIncomesSuccess]: (state, { payload }) => [...state, payload],
  [getIncomesSuccess]: (_, { payload }) => payload,
  [editIncomesSuccess]: (state, { payload }) =>
    state.map((transaction) =>
      transaction.id === payload.id ? payload : transaction
    ),
  [userLogout]: () => [],
});

const transTypeReducer = createReducer("", {
  [setIncomesType]: () => "incomes",
  [setCostsType]: () => "costs",
  [resetType]: () => "",
  [userLogout]: () => "",
});

const transIdReducer = createReducer(null, {
  [setTransId]: (_, { payload }) => payload,
  [resetTransId]: () => null,
});

const transactionsReducer = combineReducers({
  data: combineReducers({
    costs: costsReducer,
    incomes: incomesReducer,
  }),
  transType: transTypeReducer,
  transId: transIdReducer,
});

export default transactionsReducer;
