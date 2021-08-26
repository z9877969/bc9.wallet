import { Component } from "react";
import shortid from "shortid";
import BaseSection from "../_share/BaseSection/BaseSection";
import GoBackHeader from "../_share/GoBackHeader/GoBackHeader";
import TransactionForm from "../TransactionForm/TransactionForm";
import CategoryListPage from "../CategoryListPage/CategoryListPage";
import dateApi from '../../utils/withPeriods/classDataByPeriod';

class TransactionPage extends Component {
  state = {
    date: dateApi.current,
    time: dateApi.currentTime,
    category: this.props.transType === "costs" ? "Еда" : "Зарплата",
    sum: "",
    currency: "USD",
    comment: "",
    isCatList: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSetCategory = (category) => {
    this.setState({ category: category });
    this.handleToggleCatList();
  };

  handleToggleCatList = () => {
    this.setState((prev) => ({
      isCatList: !prev.isCatList,
    }));
  };

  handleSubmit = (e) => {
    const { isCatList, ...transaction } = this.state;
    const { transType, handleAddTransaction, handleReturnToMainPage } =
      this.props;
    e.preventDefault();
    handleAddTransaction({
      transaction: { id: shortid.generate(), ...transaction },
      transType,
    });
    handleReturnToMainPage();
  };

  render() {
    const { handleReturnToMainPage, transType } = this.props;
    const { isCatList, ...dataForm } = this.state;
    return (
      <BaseSection>
        {!isCatList ? (
          <>
            <GoBackHeader
              title={transType === "incomes" ? "Доходы" : "Расходы"}
              handleGoBack={handleReturnToMainPage}
            />
            <TransactionForm
              dataForm={dataForm}
              handleChange={this.handleChange}
              handleToggleCatList={this.handleToggleCatList}
              handleSubmit={this.handleSubmit}
            />
          </>
        ) : (
          <CategoryListPage
            transType={transType}
            handleToggleCatList={this.handleToggleCatList}
            handleSetCategory={this.handleSetCategory}
          />
        )}
      </BaseSection>
    );
  }
}

export default TransactionPage;
