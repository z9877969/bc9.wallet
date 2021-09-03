import axios from "axios";

axios.defaults.baseURL = "http://localhost:4040/";

export const addTransaction = ({ transType, transaction }) => {
  return axios
    .post(transType, transaction, {
      params: {
        key: "654654654",
        page: 21,
        search: "321321",
      },
    })
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
