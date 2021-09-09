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

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <MainPage {...props} />}
        />
        <Route path="/transaction/:transType" component={TransactionPage} />
        <Route path="/balance" component={BalancePage} />
        <Route path="/history/:transType">
          <TransactionsHistoryPage />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default App;
