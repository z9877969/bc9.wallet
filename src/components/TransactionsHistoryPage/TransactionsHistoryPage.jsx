import { Component } from 'react';
import DatePaginator from '../DatePaginator/DatePaginator';
import HistoryTable from '../HistoryTable/HistoryTable';
import GoBackHeader from '../_share/GoBackHeader/GoBackHeader';
import LabelInput from '../_share/LabelInput/LabelInput';
import Section from '../_share/Section/Section';
import BaseSection from '../_share/BaseSection/BaseSection';
import HistoryHeaderBtns from '../HistoryHeaderBtns/HistoryHeaderBtns';
import MenuList from '../MenuList/MenuList';
import periodList from '../../assets/periodList.json';
import dateApi from '../../utils/withPeriods/classDataByPeriod';
import CategoryDetailsList from '../CategoryDetailsList/CategoryDetailsList';

class TransactionsHistoryPage extends Component {
  state = {
    isOpenPeriodList: false,
    touchedPeriod: periodList[0],
    thouchedDate: dateApi.current,
    isCategoryDetails: false,
    categoryDetailsName: "",
  };

  onOpenCategoryDetails = (category) => {
    this.setState({ categoryDetailsName: category });
    this.onToggleCategoryDetails();
  }

  onToggleCategoryDetails = () => {
    this.setState(prevState => ({ isCategoryDetails: !prevState.isCategoryDetails }))
  };

  onTogglePeriodList = () => {
    this.setState(prevState => {
      return { isOpenPeriodList: !prevState.isOpenPeriodList };
    });
  };
  onChangeTouchedPeriod = periodObj => {
    this.setState({ touchedPeriod: periodObj });
    this.onTogglePeriodList();
  };
  onChangeTouchedDate = e => {
    const { value } = e.target;
    this.setState({ thouchedDate: value });
  };
  render() {
    const { isOpenPeriodList, touchedPeriod, thouchedDate, isCategoryDetails, categoryDetailsName } = this.state;
    const { handleReturnToMainPage, transactions } = this.props;
    const allSum = transactions.reduce((acc, { sum }) => acc + Number(sum), 0);

    const filtredCatTrans = dateApi.getDataListOfCategories({
      data: transactions,
      date: thouchedDate,
      period: touchedPeriod.name,
    });

    return (
      <BaseSection>
        <GoBackHeader handleGoBack={!isCategoryDetails ? handleReturnToMainPage : this.onToggleCategoryDetails}
          title={isCategoryDetails && categoryDetailsName}>
          {!isCategoryDetails &&
            <>
              <HistoryHeaderBtns
                onOpenPeriodList={this.onTogglePeriodList}
                touchedPeriodTitle={touchedPeriod.title}
              />
              {isOpenPeriodList && (
                <MenuList
                  onChangeTouchedPeriod={this.onChangeTouchedPeriod}
                  menuList={periodList}
                />)}
            </>
          }
        </GoBackHeader>
        {!isCategoryDetails ?
          <>
            <DatePaginator
              onChangeDate={this.onChangeTouchedDate}
              thouchedDate={thouchedDate}
              touchedPeriod={touchedPeriod}
            />
            <HistoryTable allSum={allSum} transactions={filtredCatTrans} onOpenCategoryDetails={this.onOpenCategoryDetails} />
          </> :
          <CategoryDetailsList detailsList={filtredCatTrans[categoryDetailsName].data} />
        }
      </BaseSection>
    );
  }
}

export default TransactionsHistoryPage;
