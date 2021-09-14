import axios from "axios";

const updateDataObj = (dataObj) =>
  dataObj
    ? Object.entries(dataObj).map(([id, transaction]) => {
        transaction.id = id;
        return transaction;
      })
    : [];

const API_KEY = "AIzaSyCDoK_rPVNuzMuGqXkXuMfqv8h_fAH2ETs";

const baseUrl = {
  AUTH: "https://identitytoolkit.googleapis.com/v1/",
  DB: "https://bootcamp9-ad563-default-rtdb.europe-west1.firebasedatabase.app",
};

const endPoint = {
  REGISTER: "accounts:signUp",
  LOGIN: "accounts:signInWithPassword",
};

const setBaseUrl = (url) => (axios.defaults.baseURL = url);
const setParams = (params) => (axios.defaults.params = params);

const setToken = (token) => (axios.defaults.params = { auth: token });

export const userRegisterApi = (userData) => {
  setBaseUrl(baseUrl.AUTH);
  setParams({
    key: API_KEY,
  });
  return axios
    .post(endPoint.REGISTER, {
      ...userData,
      returnSecureToken: true,
    })
    .then(({ data: { email, idToken, localId, refreshToken } }) => {
      setToken(idToken);
      return {
        email,
        idToken,
        localId,
        refreshToken,
      };
    })
    .catch((err) => {
      throw err;
    });
};

export const userLoginApi = (userData) => {
  setBaseUrl(baseUrl.AUTH);
  setParams({
    key: API_KEY,
  });
  return axios
    .post(endPoint.LOGIN, {
      ...userData,
      returnSecureToken: true,
    })
    .then(({ data: { email, idToken, localId, refreshToken } }) => {
      setToken(idToken);
      return {
        email,
        idToken,
        localId,
        refreshToken,
      };
    })
    .catch((err) => {
      throw err;
    });
};

//users/ada/name.json?auth=<ID_TOKEN>"

export const addTransactionApi = ({
  transType,
  transaction,
  localId,
  idToken,
}) => {
  setBaseUrl(baseUrl.DB);
  setParams({ auth: idToken });
  return axios
    .post(
      "users/" + localId + "/transactions/" + transType + ".json",
      transaction
    )
    .then(({ data: { name } }) => ({ id: name, ...transaction }))
    .catch((err) => {
      throw err;
    });
};

export const getTransactions = ({ transType, localId, idToken }) => {
  setBaseUrl(baseUrl.DB);
  setParams({ auth: idToken });
  return axios
    .get(`/users/${localId}/transactions/${transType}.json`)
    .then(({ data }) => updateDataObj(data))
    .catch((err) => {
      throw err;
    });
};

export const editTransactionApi = ({
  transType,
  transaction,
  localId,
  idToken,
  transId,
}) => {
  setBaseUrl(baseUrl.DB);
  setParams({ auth: idToken });
  return axios
    .patch(
      `/users/${localId}/transactions/${transType}/${transId}.json`,
      transaction
    )
    .then(({ data }) => ({ id: transId, ...data }))
    .catch((err) => {
      throw err;
    });
};
