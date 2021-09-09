import { createSelector } from "@reduxjs/toolkit";

export const getTransactions = (state) => state.transactions.data;
export const getTranstype = (state) => state.transactions.transType;

export const getCurTransactions = createSelector(
  [getTransactions, getTranstype],
  (transactions, transType) => {
    return transactions[transType] || [];
  }
);
