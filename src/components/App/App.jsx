import { Component } from 'react';
import MainPage from '../MainPage/MainPage';
import TransactionPage from '../TransactionPage/TransactionPage';
import TransactionsHistoryPage from '../TransactionsHistoryPage/TransactionsHistoryPage';
import BalancePage from '../BalancePage/BalancePage';

class App extends Component {
  state = {
    mainInfoType: '',
    costs: [],
    incomes: [],
  };

  componentDidMount() {
    localStorage.getItem('costs') &&
      this.setState({ costs: JSON.parse(localStorage.getItem('costs')) });
    localStorage.getItem('incomes') &&
      this.setState({ incomes: JSON.parse(localStorage.getItem('incomes')) });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.costs !== this.state.costs) {
      localStorage.setItem('costs', JSON.stringify(this.state.costs));
    }
    if (prevState.incomes !== this.state.incomes) {
      localStorage.setItem('incomes', JSON.stringify(this.state.incomes));
    }
  }

  handleOpenTransaction = mainInfoType => {
    this.setState({ mainInfoType: mainInfoType });
  };

  handleReturnToMainPage = () => {
    this.setState({ mainInfoType: '' });
  };

  handleAddTransaction = ({ transaction, transType }) => {
    this.setState(prev => ({
      [transType]: [...prev[transType], transaction],
    }));
  };

  render() {
    const { mainInfoType, costs, incomes } = this.state;

    switch (mainInfoType) {
      case 'balance':
        return (
          <BalancePage handleReturnToMainPage={this.handleReturnToMainPage} />
        );
      case 'costs':
        return (
          <>
            <TransactionPage
              transType="costs"
              handleReturnToMainPage={this.handleReturnToMainPage}
              handleAddTransaction={this.handleAddTransaction}
            />
          </>
        );
      case 'incomes':
        return (
          <TransactionPage
            transType="incomes"
            handleReturnToMainPage={this.handleReturnToMainPage}
            handleAddTransaction={this.handleAddTransaction}
          />
        );
      case 'costsHistory':
        return (
          <TransactionsHistoryPage
            transactions={costs}
            handleReturnToMainPage={this.handleReturnToMainPage}
          />
        );
      case 'incomesHistory':
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

    // return (
    //   <>
    //     {!mainInfoType ? (
    //       <>
    //         <MainPage handleOpenTransaction={this.handleOpenTransaction} />
    //       </>
    //     ) : mainInfoType === "balance" ? (
    //       <BalancePage handleReturnToMainPage={this.handleReturnToMainPage} />
    //     ) : (
    //       <TransactionPage
    //         handleReturnToMainPage={this.handleReturnToMainPage}
    //       />
    //     )}
    //     <TransactionsHistoryPage />

    //     {/* <MenuList /> */}
    //   </>
    // );
  }
}

export default App;
