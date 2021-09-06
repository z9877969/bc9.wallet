import { useMemo, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import shortid from "shortid";
import BaseSection from "../components/_share/BaseSection/BaseSection";
import GoBackHeader from "../components/_share/GoBackHeader/GoBackHeader";
import TransactionForm from "../components/TransactionForm/TransactionForm";
import dateApi from "../utils/withPeriods/classDataByPeriod";
import { useForm } from "../hooks/useForm";

const CategoryListPage = lazy(() => import("./CategoryListPage" /* webpackChunkName: "category-list-page"*/));

const getInitialState = (transType) => {
  return {
    date: dateApi.current,
    time: dateApi.currentTime,
    category: transType === "costs" ? "Еда" : "Зарплата",
    sum: "",
    currency: "USD",
    comment: "",
  };
};

const TransactionPage = (props) => {
  const {
    match,
    history,
    handleAddTransaction,
    costsCategoryList,
    incomesCategoryList,
    handleAddCategory,
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
    onSubmit: (transaction) => {
      handleAddTransaction({
        transaction,
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
              handleAddCategory={handleAddCategory}
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
