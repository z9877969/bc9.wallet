import { useEffect, lazy, Suspense, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  getCosts,
  getIncomes,
} from "../../redux/transactions/transactionsOperation";
import { useDispatch, useSelector } from "react-redux";
import AuthPage from "../../pages/AuthPage";
import { getIdToken, getIsAuthUser } from "../../redux/auth/authSelectors";
import { userLogout } from "../../redux/auth/authActions";
import { getCurUser } from "../../redux/auth/authOperations";

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
  const dispatch = useDispatch();

  const isAuth = useSelector(getIsAuthUser);
  const idToken = useSelector(getIdToken)

  useEffect(() => {
    idToken && dispatch(getCurUser());
  }, []);

  useEffect(() => {
    isAuth && dispatch(getCosts());
    isAuth && dispatch(getIncomes());
  }, [isAuth]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isAuth && (
        <button type="button" onClick={() => dispatch(userLogout())}>
          LogOut
        </button>
      )}
      {isAuth ? (
        <Switch>
          <Route path="/" exact render={(props) => <MainPage {...props} />} />
          <Route
            path="/transaction/:transType/:transId"
            component={TransactionPage}
          />
          <Route path="/transaction/:transType" component={TransactionPage} />
          <Route path="/balance" component={BalancePage} />
          <Route path="/history/:transType">
            <TransactionsHistoryPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/auth/:authType" component={AuthPage} />
          <Redirect to="/auth/login" />
        </Switch>
      )}
    </Suspense>
  );
};

export default App;
