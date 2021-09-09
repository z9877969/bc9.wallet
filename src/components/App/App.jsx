import { useEffect, lazy, Suspense } from "react";
import { Route, Switch, } from "react-router-dom";
import { getCosts, getIncomes } from "../../redux/transactions/transactionsOperation";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch()

   useEffect(() => {
    dispatch(getCosts());
    dispatch(getIncomes());
  }, [dispatch]);


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
