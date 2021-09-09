import { createReducer } from "@reduxjs/toolkit";
import {
  getCostsError,
  getIncomesError,
  getCostsRequests,
  getIncomesRequests,
  addIncomesError,
  addCostsError,
  addCostsRequests,
  addIncomesRequests,
} from "../transactions/transactionsActions";

const setError = (_, { payload }) => payload;
const resetError = () => null;

const errorReducer = createReducer(null, {
  [addCostsRequests]: resetError,
  [addIncomesRequests]: resetError,
  [getCostsRequests]: resetError,
  [getIncomesRequests]: resetError,
  [getCostsError]: setError,
  [getIncomesError]: setError,
  [addIncomesError]: setError,
  [addCostsError]: setError,
});

export default errorReducer;
