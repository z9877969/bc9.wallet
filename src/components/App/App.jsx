import { useEffect, useState } from "react";
import MainPage from "../MainPage/MainPage";
import TransactionPage from "../TransactionPage/TransactionPage";
import TransactionsHistoryPage from "../TransactionsHistoryPage/TransactionsHistoryPage";
import BalancePage from "../BalancePage/BalancePage";
import { getFromLS, setToLS } from "../../utils/helpers/withLS";

const App = () => {
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

  const handleOpenTransaction = (mainInfoType) => setMainInfoType(mainInfoType);

  const handleReturnToMainPage = () => setMainInfoType("");

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

  switch (mainInfoType) {
    case "balance":
      return <BalancePage handleReturnToMainPage={handleReturnToMainPage} />;
    case "costs":
      return (
        <>
          <TransactionPage
            transType="costs"
            handleReturnToMainPage={handleReturnToMainPage}
            handleAddTransaction={handleAddTransaction}
            handleAddCategory={handleAddCategory}
            costsCategoryList={costsCat}
          />
        </>
      );
    case "incomes":
      return (
        <TransactionPage
          transType="incomes"
          handleReturnToMainPage={handleReturnToMainPage}
          handleAddTransaction={handleAddTransaction}
          handleAddCategory={handleAddCategory}
          incomesCategoryList={incomesCat}
        />
      );
    case "costsHistory":
      return (
        <TransactionsHistoryPage
          transactions={costs}
          handleReturnToMainPage={handleReturnToMainPage}
        />
      );
    case "incomesHistory":
      return (
        <TransactionsHistoryPage
          transactions={incomes}
          handleReturnToMainPage={handleReturnToMainPage}
        />
      );
    default:
      return (
        <>
          <MainPage
            costs={costs}
            incomes={incomes}
            handleOpenTransaction={handleOpenTransaction}
          />
        </>
      );
  }
};

export default App;
