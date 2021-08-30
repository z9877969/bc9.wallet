import { Component } from "react";
import MainPage from "../MainPage/MainPage";
import TransactionPage from "../TransactionPage/TransactionPage";
import TransactionsHistoryPage from "../TransactionsHistoryPage/TransactionsHistoryPage";
import BalancePage from "../BalancePage/BalancePage";

class App extends Component {
  state = {
    mainInfoType: "",
    costs: [],
    incomes: [],
    costsCat: [],
    incomesCat: [],
  };

  componentDidMount() {
    localStorage.getItem("costs") &&
      this.setState({ costs: JSON.parse(localStorage.getItem("costs")) });
    localStorage.getItem("incomes") &&
      this.setState({ incomes: JSON.parse(localStorage.getItem("incomes")) });
    localStorage.getItem("costsCat") &&
      this.setState({ costsCat: JSON.parse(localStorage.getItem("costsCat")) });
    localStorage.getItem("incomesCat") &&
      this.setState({
        incomesCat: JSON.parse(localStorage.getItem("incomesCat")),
      });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.costs !== this.state.costs) {
      localStorage.setItem("costs", JSON.stringify(this.state.costs));
    }
    if (prevState.incomes !== this.state.incomes) {
      localStorage.setItem("incomes", JSON.stringify(this.state.incomes));
    }
    if (prevState.costsCat !== this.state.costsCat) {
      localStorage.setItem("costsCat", JSON.stringify(this.state.costsCat));
    }
    if (prevState.incomesCat !== this.state.incomesCat) {
      localStorage.setItem("incomesCat", JSON.stringify(this.state.incomesCat));
    }
  }

  handleAddCategory = ({ transType, category }) => {
    switch (transType) {
      case "incomes":
        return this.setState((prev) => ({
          incomesCat: [...prev.incomesCat, category],
        }));
      case "costs":
        return this.setState((prev) => ({
          costsCat: [...prev.costsCat, category],
        }));
      default:
        return;
    }
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
    const { mainInfoType, costs, incomes, incomesCat, costsCat } = this.state;

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
              handleAddCategory={this.handleAddCategory}
              costsCategoryList={costsCat}
            />
          </>
        );
      case "incomes":
        return (
          <TransactionPage
            transType="incomes"
            handleReturnToMainPage={this.handleReturnToMainPage}
            handleAddTransaction={this.handleAddTransaction}
            handleAddCategory={this.handleAddCategory}
            incomesCategoryList={incomesCat}
          />
        );
      case "costsHistory":
        return (
          <TransactionsHistoryPage
            transactions={costs}
            handleReturnToMainPage={this.handleReturnToMainPage}
          />
        );
      case "incomesHistory":
        return (
          <TransactionsHistoryPage
            transactions={incomes}
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
  }
}

export default App;
