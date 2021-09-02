import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import TransactionPage from "../../pages/TransactionPage";
import TransactionsHistoryPage from "../../pages/TransactionsHistoryPage";
import BalancePage from "../../pages/BalancePage";
import { getFromLS, setToLS } from "../../utils/helpers/withLS";

const App = () => {
  const history = useHistory();

  const [costs, setCosts] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [costsCat, setCostsCat] = useState([]);
  const [incomesCat, setIncomesCat] = useState([]);

  const handleAddCategory = ({ transType, category }) => {
    switch (transType) {
      case "incomes":
        return setIncomesCat((prevIncomesCat) => [...prevIncomesCat, category]);
      case "costs":
        return setCostsCat((prevCostsCat) => [...prevCostsCat, category]);
      default:
        return;
    }
  };



  const handleAddTransaction = ({ transaction, transType }) => {
    transType === "costs" &&
      setCosts((prevCosts) => [...prevCosts, transaction]);
    transType === "incomes" &&
      setIncomes((prevIncomes) => [...prevIncomes, transaction]);
  };

  useEffect(() => {
    getFromLS("costs", setCosts);
    getFromLS("incomes", setIncomes);
    getFromLS("costsCat", setCostsCat);
    getFromLS("incomesCat", setIncomesCat);
  }, []);
  useEffect(() => {
    setToLS("costs", costs);
  }, [costs]);
  useEffect(() => {
    setToLS("incomes", incomes);
  }, [incomes]);
  useEffect(() => {
    setToLS("costsCat", costsCat);
  }, [costsCat]);
  useEffect(() => {
    setToLS("incomesCat", incomesCat);
  }, [incomesCat]);

  return (
    <Switch>
      <Route
        path="/"
        exact
        render={(props) => (
          <MainPage
            {...props}
            costs={costs}
            incomes={incomes}
          />
        )}
      />
      <Route
        path="/transaction/:transType"
        render={(props) => (
          <TransactionPage
            {...props}
            handleAddTransaction={handleAddTransaction}
            handleAddCategory={handleAddCategory}
            costsCategoryList={costsCat}
          />
        )}
      />
      <Route path="/balance" component={BalancePage} />
      <Route path="/history/:transType">
        <TransactionsHistoryPage
          transactions={{ incomes, costs }}
        // handleReturnToMainPage={handleReturnToMainPage}
        />
      </Route>
    </Switch>
  );
};

export default App;

// switch (mainInfoType) {
//   case "costsHistory":
//     return (
//       <TransactionsHistoryPage
//         transactions={costs}
//         handleReturnToMainPage={handleReturnToMainPage}
//       />
//     );
//   case "incomesHistory":
//     return (
//       <TransactionsHistoryPage
//         transactions={incomes}
//         handleReturnToMainPage={handleReturnToMainPage}
//       />
//     );
// }
