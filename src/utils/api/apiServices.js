import axios from "axios";

const updateDataObj = (dataObj) =>
  dataObj
    ? Object.entries(dataObj).map(([id, transaction]) => {
        transaction.id = id;
        return transaction;
      })
    : [];

axios.defaults.baseURL =
  "https://bootcamp9-ad563-default-rtdb.europe-west1.firebasedatabase.app";

// /transactions/costs.json

export const addTransactionApi = ({ transType, transaction }) => {
  return axios
    .post("/transactions/" + transType + ".json", transaction)
    .then(({ data: { name } }) => ({ id: name, ...transaction }))
    .catch((err) => {
      throw err;
    });
};

export const getTransactions = (transType) => {
  return axios
    .get(`/transactions/${transType}.json`)
    .then(({ data }) => updateDataObj(data))
    .catch((err) => {
      throw err;
    });
};

// https://[PROJECT_ID].firebaseio.com/users/jack/name.json

// const queryString =
//   baseUrl +
//   endPoint +
//   "?" +
//   Object.entries(params).reduce((acc, [key, value], idx, arr) =>
//     acc + `${key}=${value}` + idx < arr.length - 1 ? "&" : null
//   );
