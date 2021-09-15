import { userRefesh } from "../auth/authOperations";
import {
  editCostsError,
  editIncomesError,
  getCostsError,
  getIncomesError,
} from "../transactions/transactionsActions";

export const getError =
  ({ error, cb, data, errorType }) =>
  (dispatch) => {
    if (error.status === 401) {
      dispatch(userRefesh({ cb, data }));
    }

    switch (errorType) {
      case "getIncomesError":
        dispatch(getIncomesError(error.message));
        break;
      case "getCostsError":
        dispatch(getCostsError(error.message));
        break;
      case "editIncomesError":
        dispatch(editIncomesError(error.message));
        break;
      case "editCostsError":
        dispatch(editCostsError(error.message));
        break;
      default:
        break;
    }
  };
