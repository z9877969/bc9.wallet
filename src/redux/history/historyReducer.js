import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import periodList from "../../assets/periodList.json";
import { setTouchedPeriod } from "./historyActions";

const periodReducer = createReducer(periodList[0], {
  [setTouchedPeriod]: (_, { payload }) => payload,
});

const historyReducer = combineReducers({
  period: periodReducer,
});

export default historyReducer;
