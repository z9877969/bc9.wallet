import { useState, useRef, useEffect, useMemo, useReducer } from "react";
import { Route, Switch } from "react-router-dom";
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
    match,
    history,
    handleAddTransaction,
    costsCategoryList,
    incomesCategoryList,
  } = props;

  const {
    params: { transType },
  } = match;

  const initialState = useMemo(() => getInitialState(transType), []);

  const handleToggleCatList = (isGoBack) => {
    history.push(
      typeof isGoBack === "object"
        ? {
            pathname: `/transaction/${transType}/cat-list`,
            state: { from: history.location },
          }
        : history.location.state?.from || "/"
    );
  };

  const formik = useForm({
    initialState,
    handleClickCb: () => {
      handleToggleCatList();
    },
    onSubmit: (dataForm) => {
      handleAddTransaction({
        transaction: { id: shortid.generate(), ...dataForm },
        transType,
      });
      history.push(history.location.state?.from || "/");
    },
  });

  return (
    <BaseSection>
      <Switch>
        <Route
          path="/transaction/:transType/cat-list"
          render={(props) => (
            <CategoryListPage
              {...props}
              transType={transType}
              handleToggleCatList={handleToggleCatList}
              handleSetCategory={formik.handleSetDataByClick}
              categoryList={
                transType === "incomes"
                  ? incomesCategoryList
                  : costsCategoryList
              }
            />
          )}
        />
        <Route path="/transaction/:transType">
          <GoBackHeader
            title={transType === "incomes" ? "Доходы" : "Расходы"}
          />
          <TransactionForm
            dataForm={formik.data}
            handleChange={formik.handleChange}
            handleToggleCatList={handleToggleCatList}
            handleSubmit={formik.handleSubmit}
          />
        </Route>
      </Switch>
    </BaseSection>
  );
};

export default TransactionPage;
