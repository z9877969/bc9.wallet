import axios from "axios";

axios.defaults.baseURL = "http://localhost:4040/";

export const addTransactionApi = ({ transType, transaction }) => {
  return axios
    .post(transType, transaction)
    .then(({ data }) => data)
    .catch((err) => {
      throw err;
    });
};

export const getTransactions = (transType) => {
  return axios
    .get(transType)
    .then(({ data }) => data)
    .catch((err) => {
      throw err;
    });
};


// const queryString =
//   baseUrl +
//   endPoint +
//   "?" +
//   Object.entries(params).reduce((acc, [key, value], idx, arr) =>
//     acc + `${key}=${value}` + idx < arr.length - 1 ? "&" : null
//   );
