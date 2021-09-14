import { useMemo, lazy , useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import BaseSection from "../components/_share/BaseSection/BaseSection";
import GoBackHeader from "../components/_share/GoBackHeader/GoBackHeader";
import TransactionForm from "../components/TransactionForm/TransactionForm";
import dateApi from "../utils/withPeriods/classDataByPeriod";
import { useForm } from "../hooks/useForm";
import { addTransaction, editTransaction } from "../redux/transactions/transactionsOperation";
import {
  addCostsCat,
  addIncomesCat,
} from "../redux/categories/categories-actions";
import {
  resetTransId,
  resetType,
  setCostsType,
  setIncomesType,
  setTransId,
} from "../redux/transactions/transactionsActions";
import {
  getEditTransaction,
  getTranstype,
  getTransId,
} from "../redux/transactions/transactionsSelectors";

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
  const { match, history } = props;
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categories);
  const transType = useSelector(getTranstype);
  const transId = useSelector(getTransId);
  const editingTransaction = useSelector(getEditTransaction);

  const handleAddCategory = ({ transType, category }) => {
    switch (transType) {
      case "incomes":
        return dispatch(addIncomesCat(category));
      case "costs":
        return dispatch(addCostsCat(category));
      default:
        return;
    }
  };

  const initialState = useMemo(
    () => (editingTransaction ? editingTransaction : getInitialState(transType)),
    [editingTransaction, transType]
  );

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
    dispatch(addTransaction({ transType, transaction }));
  };

  // console.log("initialState :>> ", initialState);

  const formik = useForm({
    initialState,
    handleClickCb: () => {
      handleToggleCatList();
    },
    onSubmit: (transaction) => {
      transId
        ? dispatch(editTransaction({ transType, transaction }))
        : handleAddTransaction(transaction);
      history.push(history.location.state?.from || "/");
    },
  });

  useEffect(() => {
    const {
      params: { transType, transId },
    } = match;
    transType === "incomes"
      ? dispatch(setIncomesType())
      : dispatch(setCostsType());
    transId && dispatch(setTransId(transId));

    return () => {
      dispatch(resetType());
      transId && dispatch(resetTransId());
    };
  }, []);

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
              categoryList={categoryList[transType + "Cat"]}
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

// const coNnect = (mSTP, mDTP) => (WrappedComponent) => (props) => {
//   return <WrappedComponent {...props} {...stateProps} {...actionProps} />;
// };
