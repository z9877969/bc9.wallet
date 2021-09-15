import {
  addTransactionApi,
  editTransactionApi,
  getTransactions,
} from "../../utils/api/apiServices";
import { getError } from "../error/errorHandler";
import {
  addCostsError,
  addCostsRequests,
  addCostsSuccess,
  addIncomesError,
  addIncomesRequests,
  addIncomesSuccess,
  editCostsError,
  editCostsRequests,
  editCostsSuccess,
  editIncomesError,
  editIncomesRequests,
  editIncomesSuccess,
  getCostsError,
  getCostsRequests,
  getCostsSuccess,
  getIncomesError,
  getIncomesRequests,
  getIncomesSuccess,
} from "./transactionsActions";

// transType,
//   transaction,
//   localId,
//   idToken,

export const addTransaction =
  ({ transType, transaction }) =>
  async (dispatch, getState) => {
    transType === "incomes"
      ? dispatch(addIncomesRequests())
      : dispatch(addCostsRequests());

    const { localId, idToken } = getState().auth.user;

    try {
      const transactionData = await addTransactionApi({
        transType,
        transaction,
        localId,
        idToken,
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

export const getCosts = () => async (dispatch, getState) => {
  dispatch(getCostsRequests());

  const { localId, idToken } = getState().auth.user;

  try {
    const costs = await getTransactions({
      transType: "costs",
      localId,
      idToken,
    });

    dispatch(getCostsSuccess(costs));
  } catch (error) {
    dispatch(
      getError({
        error,
        cb: getCosts,
        data: null,
        errorType: "getCostsError",
      })
    );
  }
};

export const getIncomes = () => async (dispatch, getState) => {
  dispatch(getIncomesRequests());

  const { localId, idToken } = getState().auth.user;

  try {
    const incomes = await getTransactions({
      transType: "incomes",
      localId,
      idToken,
    });
    dispatch(getIncomesSuccess(incomes));
  } catch (error) {
    console.log("error_dispatch :>> ", error);
    dispatch(
      getError({
        error,
        cb: getIncomes,
        data: null,
        errorType: "getIncomesError",
      })
    );
  }
};
//getIncomesError(error)

export const editTransaction =
  ({ transType, transaction }) =>
  async (dispatch, getState) => {
    transType === "incomes"
      ? dispatch(editIncomesRequests())
      : dispatch(editCostsRequests());

    const { auth, transactions } = getState();
    const { localId, idToken } = auth.user;
    const { transId } = transactions;

    try {
      const transactionData = await editTransactionApi({
        transType,
        transaction,
        localId,
        idToken,
        transId,
      });
      transType === "incomes"
        ? dispatch(editIncomesSuccess(transactionData))
        : dispatch(editCostsSuccess(transactionData));
    } catch (error) {
      transType === "incomes"
        ? dispatch(
            getError({
              error,
              cb: editTransaction,
              data: { transType, transaction },
              errorType: "editIncomesError",
            })
          )
        : dispatch(
            getError({
              error,
              cb: editTransaction,
              data: { transType, transaction },
              errorType: "editCostsError",
            })
          );

      // transType === "incomes"
      //   ? dispatch(editIncomesError(error.message))
      //   : dispatch(editCostsError(error));
    }
  };
