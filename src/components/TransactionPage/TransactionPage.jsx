import { useState, useRef, useEffect, useMemo, useReducer } from "react";
import shortid from "shortid";
import BaseSection from "../_share/BaseSection/BaseSection";
import GoBackHeader from "../_share/GoBackHeader/GoBackHeader";
import TransactionForm from "../TransactionForm/TransactionForm";
import CategoryListPage from "../CategoryListPage/CategoryListPage";
import dateApi from "../../utils/withPeriods/classDataByPeriod";
import { useForm } from "../../hooks/useForm";

const getInitialState = (transType) => {
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

  const [isCatList, setIsCatList] = useState(initialState.isCatList);
  
  const formik = useForm({
    initialState,
    handleClickCb: () => {
      setIsCatList((prev) => !prev);
    },
    onSubmit: (dataForm) => {
      handleAddTransaction({
        transaction: { id: shortid.generate(), ...dataForm },
        transType,
      });
      handleReturnToMainPage();
    },
  });

  const handleToggleCatList = () => {
    setIsCatList((prev) => !prev);
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
            dataForm={formik.data}
            handleChange={formik.handleChange}
            handleToggleCatList={handleToggleCatList}
            handleSubmit={formik.handleSubmit}
          />
        </>
      ) : (
        <CategoryListPage
          transType={transType}
          handleToggleCatList={handleToggleCatList}
          handleSetCategory={formik.handleSetDataByClick}
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
