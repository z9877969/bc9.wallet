import { useMemo, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import shortid from "shortid";
import BaseSection from "../components/_share/BaseSection/BaseSection";
import GoBackHeader from "../components/_share/GoBackHeader/GoBackHeader";
import TransactionForm from "../components/TransactionForm/TransactionForm";
import dateApi from "../utils/withPeriods/classDataByPeriod";
import { useForm } from "../hooks/useForm";
import {
  addCosts,
  addIncomes,
} from "../redux/transactions/transactionsActions";

const CategoryListPage = lazy(() =>
  import("./CategoryListPage" /* webpackChunkName: "category-list-page"*/)
);

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
    costsCategoryList,
    incomesCategoryList,
    handleAddCategory,
    addIncomes,
    addCosts,
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

  const handleAddTransaction = (transaction) => {
    transType === "incomes" && addIncomes(transaction);
    transType === "costs" && addCosts(transaction);
  };

  const formik = useForm({
    initialState,
    handleClickCb: () => {
      handleToggleCatList();
    },
    onSubmit: (transaction) => {
      handleAddTransaction(transaction);
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

const mapDispatchToProps = (dispatch) => ({
  addCosts: (transaction) => {
    dispatch(addCosts(transaction));
  },
  addIncomes: (transaction) => {
    dispatch(addIncomes(transaction));
  },
});

export default connect(null, mapDispatchToProps)(TransactionPage);

// const coNnect = (mSTP, mDTP) => (WrappedComponent) => (props) => {
//   return <WrappedComponent {...props} {...stateProps} {...actionProps} />;
// };
