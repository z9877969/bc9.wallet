import { useEffect, useState, lazy, Suspense } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { getFromLS, setToLS } from "../../utils/helpers/withLS";
import { addTransaction, getTransactions } from "../../utils/api/apiServices";

const MainPage = lazy(() =>
  import("../../pages/MainPage" /*webpackChunkName: "main-page" */)
);
const TransactionPage = lazy(() =>
  import(
    "../../pages/TransactionPage" /*webpackChunkName: "transaction-page" */
  )
);
const TransactionsHistoryPage = lazy(() =>
  import(
    "../../pages/TransactionsHistoryPage" /*webpackChunkName: "transactions-history-page" */
  )
);
const BalancePage = lazy(() =>
  import("../../pages/BalancePage" /*webpackChunkName: "balance-page" */)
);

const App = () => {
  const history = useHistory();

  // const [costs, setCosts] = useState([]);
  // const [incomes, setIncomes] = useState([]);
  // const [costsCat, setCostsCat] = useState([]);
  // const [incomesCat, setIncomesCat] = useState([]);

  // const handleAddCategory = ({ transType, category }) => {
  //   switch (transType) {
  //     case "incomes":
  //       return setIncomesCat((prevIncomesCat) => [...prevIncomesCat, category]);
  //     case "costs":
  //       return setCostsCat((prevCostsCat) => [...prevCostsCat, category]);
  //     default:
  //       return;
  //   }
  // };

  // const handleAddTransaction = ({ transaction, transType }) => {
  //   addTransaction({ transType, transaction })
  //     .then((transaction) => {
  //       transType === "costs"
  //         ? setCosts((prevCosts) => [...prevCosts, transaction])
  //         : setIncomes((prevIncomes) => [...prevIncomes, transaction]);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   getTransactions("costs")
  //     .then((transactions) => setCosts(transactions))
  //     .catch((err) => console.log(err));
  //   getTransactions("incomes")
  //     .then((transactions) => setIncomes(transactions))
  //     .catch((err) => console.log(err));
  //   getFromLS("costsCat", setCostsCat);
  //   getFromLS("incomesCat", setIncomesCat);
  // }, []);

  // useEffect(() => {
  //   setToLS("costsCat", costsCat);
  // }, [costsCat]);
  // useEffect(() => {
  //   setToLS("incomesCat", incomesCat);
  // }, [incomesCat]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <MainPage {...props} costs={[]} incomes={[]} />
          )}
        />
        <Route
          path="/transaction/:transType"
          component={TransactionPage}
        />
        <Route path="/balance" component={BalancePage} />
        <Route path="/history/:transType">
          <TransactionsHistoryPage />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default App;
