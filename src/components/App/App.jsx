import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import TransactionPage from "../TransactionPage/TransactionPage";
import TransactionsHistoryPage from "../TransactionsHistoryPage/TransactionsHistoryPage";
import BalancePage from "../BalancePage/BalancePage";
import { getFromLS, setToLS } from "../../utils/helpers/withLS";

const App = () => {
  const history = useHistory();

  const [mainInfoType, setMainInfoType] = useState("");
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

  const handleOpenTransaction = (transType) => {
    const transactionLocation = {
      pathname: `/transaction/${transType}`,
      state: { from: history.location },
    };
    const balanceLocation = {
      pathname: `/${transType}`,
      state: { from: history.location },
    };
    history.push(
      transType === "balance" ? balanceLocation : transactionLocation
    );
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
            handleOpenTransaction={handleOpenTransaction}
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
    </Switch>
  );
};

export default App;

// switch (mainInfoType) {
//   case "balance":
//     return <BalancePage handleReturnToMainPage={handleReturnToMainPage} />;
//   case "costs":
//     return (
//       <>
//         <TransactionPage
//           transType="costs"
//           handleReturnToMainPage={handleReturnToMainPage}
//           handleAddTransaction={handleAddTransaction}
//           handleAddCategory={handleAddCategory}
//           costsCategoryList={costsCat}
//         />
//       </>
//     );
//   case "incomes":
//     return (
//       <TransactionPage
//         transType="incomes"
//         handleReturnToMainPage={handleReturnToMainPage}
//         handleAddTransaction={handleAddTransaction}
//         handleAddCategory={handleAddCategory}
//         incomesCategoryList={incomesCat}
//       />
//     );
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
//   default:
//     return (
//       <>
//         <MainPage
//           costs={costs}
//           incomes={incomes}
//           handleOpenTransaction={handleOpenTransaction}
//         />
//       </>
//     );
// }
