import { createSelector } from "@reduxjs/toolkit";

export const getTransactions = (state) => state.transactions.data;
export const getTranstype = (state) => state.transactions.transType;
export const getTransId = (state) => state.transactions.transId; // defaultId = null

export const getCurTransactions = createSelector(
  [getTransactions, getTranstype],
  (transactions, transType) => {
    return transactions[transType] || [];
  }
);

export const getEditTransaction = createSelector(
  [getCurTransactions, getTransId],
  (curTransactions, transId) => {
    return transId
      ? curTransactions.find((trans) => trans.id === transId)
      : null;
  }
);
