import { createAction } from "@reduxjs/toolkit";
import types from "./transactionsActionTypes";

export const addCosts = createAction(types.ADD_COSTS);

export const addIncomes = createAction(types.ADD_INCOMES);


