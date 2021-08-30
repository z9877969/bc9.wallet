import { useState, useRef, useEffect, useMemo, useReducer } from "react";
import shortid from "shortid";
import BaseSection from "../_share/BaseSection/BaseSection";
import GoBackHeader from "../_share/GoBackHeader/GoBackHeader";
import TransactionForm from "../TransactionForm/TransactionForm";
import CategoryListPage from "../CategoryListPage/CategoryListPage";
import dateApi from "../../utils/withPeriods/classDataByPeriod";

const getInitialState = (transType) => {
  console.log("getInitialState");
  return {
    date: dateApi.current,
    time: dateApi.currentTime,
    category: transType === "costs" ? "Еда" : "Зарплата",
    sum: "",
    currency: "USD",
    comment: "",
    isCatList: false,
  };
};

// action = {type, payload}
const reducer = (state, action) => {
  switch (action.type) {
    case "date":
      return { ...state, date: action.payload };
  }
};

const TransactionPage = (props) => {
  const {
    transType,
    handleReturnToMainPage,
    handleAddTransaction,
    handleAddCategory,
    costsCategoryList,
    incomesCategoryList,
  } = props;

  const initialState = useMemo(() => getInitialState(transType), []);

  const [dataF, dispatch] = useReducer(initialState, reducer);

  const change = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name, payload: value });
  };

  const [date, setDate] = useState(initialState.date);
  const [time, setTime] = useState(initialState.time);
  const [category, setCategory] = useState(initialState.category);
  const [sum, setSum] = useState(initialState.sum);
  const [currency, setCurrency] = useState(initialState.currency);
  const [comment, setComment] = useState(initialState.comment);
  const [isCatList, setIsCatList] = useState(initialState.isCatList);

  const dataForm = {
    date,
    time,
    category,
    sum,
    comment,
    currency,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "date":
        setDate(value);
        break;
      case "time":
        setTime(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "sum":
        setSum(value);
        break;
      case "currency":
        setCurrency(value);
        break;
      case "comment":
        setComment(value);
        break;
      default:
        break;
    }
  };

  const handleToggleCatList = () => {
    setIsCatList((prev) => !prev);
  };

  const handleSetCategory = (category) => {
    setCategory(category);
    handleToggleCatList();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTransaction({
      transaction: { id: shortid.generate(), ...dataForm },
      transType,
    });
    handleReturnToMainPage();
  };

  return (
    <BaseSection>
      {!isCatList ? (
        <>
          <GoBackHeader
            title={transType === "incomes" ? "Доходы" : "Расходы"}
            handleGoBack={handleReturnToMainPage}
          />
          <TransactionForm
            dataForm={dataForm}
            handleChange={handleChange}
            handleToggleCatList={handleToggleCatList}
            handleSubmit={handleSubmit}
          />
        </>
      ) : (
        <CategoryListPage
          transType={transType}
          handleToggleCatList={handleToggleCatList}
          handleSetCategory={handleSetCategory}
          handleAddCategory={handleAddCategory}
          categoryList={
            transType === "incomes" ? incomesCategoryList : costsCategoryList
          }
        />
      )}
    </BaseSection>
  );
};

export default TransactionPage;
