import { Component } from "react";
import MainPage from "../MainPage/MainPage";
import TransactionPage from "../TransactionPage/TransactionPage";
import CategoryListPage from "../CategoryListPage/CategoryListPage";
import TransactionsHistoryPage from "../TransactionsHistoryPage/TransactionsHistoryPage";
import MenuList from "../MenuList/MenuList";
import BalancePage from "../BalancePage/BalancePage";

class App extends Component {
  state = {
    mainInfoType: "",
    costs: [],
    incomes: [],
  };

  handleOpenTransaction = (mainInfoType) => {
    this.setState({ mainInfoType: mainInfoType });
  };

  handleReturnToMainPage = () => {
    this.setState({ mainInfoType: "" });
  };

  handleAddTransaction = ({ transaction, transType }) => {
    this.setState((prev) => ({
      [transType]: [...prev[transType], transaction],
    }));
  };

  render() {
    const { mainInfoType, costs, incomes } = this.state;

    switch (mainInfoType) {
      case "balance":
        return (
          <BalancePage handleReturnToMainPage={this.handleReturnToMainPage} />
        );
      case "costs":
        return (
          <>
            <TransactionPage
              transType="costs"
              handleReturnToMainPage={this.handleReturnToMainPage}
              handleAddTransaction={this.handleAddTransaction}
            />
          </>
        );
      case "incomes":
        return (
          <TransactionPage
            transType="incomes"
            handleReturnToMainPage={this.handleReturnToMainPage}
            handleAddTransaction={this.handleAddTransaction}
          />
        );
      case "costsHistory":
        return (
          <TransactionsHistoryPage
            dataCatList={costs}
            handleReturnToMainPage={this.handleReturnToMainPage}
          />
        );
      case "incomesHistory":
        return (
          <TransactionsHistoryPage
            dataCatList={incomes}
            handleReturnToMainPage={this.handleReturnToMainPage}
          />
        );
      default:
        return (
          <MainPage
            costs={costs}
            incomes={incomes}
            handleOpenTransaction={this.handleOpenTransaction}
          />
        );
    }

    return (
      <>
        {!mainInfoType ? (
          <>
            <MainPage handleOpenTransaction={this.handleOpenTransaction} />
          </>
        ) : mainInfoType === "balance" ? (
          <BalancePage handleReturnToMainPage={this.handleReturnToMainPage} />
        ) : (
          <TransactionPage
            handleReturnToMainPage={this.handleReturnToMainPage}
          />
        )}
        <TransactionsHistoryPage />

        {/* <MenuList /> */}
      </>
    );
  }
}

export default App;
