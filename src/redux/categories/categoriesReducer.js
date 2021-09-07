import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addCostsCat, addIncomesCat } from './categories-actions';

const costsCatReducer = createReducer([], {
  [addCostsCat]: (state, {payload}) => [...state, payload]
});

const incomesCatReducer = createReducer([], {
  [addIncomesCat]: (state, {payload}) => [...state, payload]
});

const categoriesReducer = combineReducers({
  costsCat: costsCatReducer,
  incomesCat: incomesCatReducer
});

export default categoriesReducer;
