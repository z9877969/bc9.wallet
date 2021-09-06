import { combineReducers } from "redux";
import types from "./transactionsActionTypes";

export const costsReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_COSTS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export const incomesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_INCOMES:
      return [...state, payload];
    default:
      return state;
  }
};

const transactionsReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesReducer,
});

export default transactionsReducer;
