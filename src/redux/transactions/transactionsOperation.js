import {
  addTransactionApi,
  getTransactions,
} from "../../utils/api/apiServices";
import {
  addCostsError,
  addCostsRequests,
  addCostsSuccess,
  addIncomesError,
  addIncomesRequests,
  addIncomesSuccess,
  getCostsError,
  getCostsRequests,
  getCostsSuccess,
  getIncomesError,
  getIncomesRequests,
  getIncomesSuccess,
} from "./transactionsActions";

export const addTransaction =
  ({ transType, transaction }) =>
  async (dispatch) => {
    transType === "incomes"
      ? dispatch(addIncomesRequests())
      : dispatch(addCostsRequests());
    try {
      const transactionData = await addTransactionApi({
        transType,
        transaction,
      });
      transType === "incomes"
        ? dispatch(addIncomesSuccess(transactionData))
        : dispatch(addCostsSuccess(transactionData));
    } catch (error) {
      transType === "incomes"
        ? dispatch(addIncomesError(error))
        : dispatch(addCostsError(error));
    }
  };

export const getCosts = () => async (dispatch) => {
  dispatch(getCostsRequests());
  try {
    const costs = await getTransactions("costs");
    dispatch(getCostsSuccess(costs));
  } catch (error) {
    dispatch(getCostsError(error));
  }
};

export const getIncomes = () => async (dispatch) => {
  dispatch(getIncomesRequests());
  try {
    const incomes = await getTransactions("incomes");
    dispatch(getIncomesSuccess(incomes));
  } catch (error) {
    dispatch(getIncomesError(error));
  }
};
