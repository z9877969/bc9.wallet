import types from "./transactionsActionTypes";

export const addCosts = (transaction) => ({
  type: types.ADD_COSTS,
  payload: transaction,
});

export const addIncomes = (transaction) => ({
  type: types.ADD_INCOMES,
  payload: transaction,
});
