import { useState, lazy } from "react";
import { connect } from "react-redux";
import { useHistory, useParams, Route, Switch } from "react-router-dom";
import DatePaginator from "../components/DatePaginator/DatePaginator";
import HistoryTable from "../components/HistoryTable/HistoryTable";
import GoBackHeader from "../components/_share/GoBackHeader/GoBackHeader";
import BaseSection from "../components/_share/BaseSection/BaseSection";
import HistoryHeaderBtns from "../components/HistoryHeaderBtns/HistoryHeaderBtns";
import MenuList from "../components/MenuList/MenuList";
import periodList from "../assets/periodList.json";
import dateApi from "../utils/withPeriods/classDataByPeriod";
const CategoryDetailsList = lazy(() =>
  import(
    "../components/CategoryDetailsList/CategoryDetailsList" /* webpackChunkName: "category-details-list"*/
  )
);

const TransactionsHistoryPage = ({
  handleReturnToMainPage,
  incomes,
  costs,
}) => {
  const history = useHistory();
  const { transType } = useParams();
  const [isOpenPeriodList, setIsOpenPeriodList] = useState(false);
  const [touchedPeriod, setTouchedPeriod] = useState(periodList[0]);
  const [thouchedDate, setThouchedDate] = useState(dateApi.current);
  const [categoryDetailsName, setCategoryDetailsName] = useState("");
  // const curTransactions = transactions && transactions[transType] || [];
  const curTransactions = transType === "incomes" ? incomes : costs;

  const onOpenCategoryDetails = (category) => {
    const nextLocation = {
      pathname: `/history/${transType}/details`,
      state: { from: history.location },
    };
    setCategoryDetailsName(category);
    history.push(nextLocation);
  };

  const onTogglePeriodList = () => {
    setIsOpenPeriodList((prevState) => {
      return !prevState;
    });
  };

  const onChangeTouchedPeriod = (periodObj) => {
    setTouchedPeriod(periodObj);
    onTogglePeriodList();
  };

  const onChangeTouchedDate = (e) => {
    const { value } = e.target;
    setThouchedDate(value);
  };

  const allSum = curTransactions.reduce((acc, { sum }) => acc + Number(sum), 0);

  const filtredCatTrans = dateApi.getDataListOfCategories({
    data: curTransactions,
    date: thouchedDate,
    period: touchedPeriod.name,
  });
  
  return (
    <BaseSection>
      <Switch>
        <Route path="/history/:transType/details">
          <GoBackHeader title={categoryDetailsName} />
          <CategoryDetailsList
            detailsList={filtredCatTrans[categoryDetailsName]?.data || []}
          />
        </Route>
        <Route path="/history/:transType">
          <GoBackHeader>
            <HistoryHeaderBtns
              onOpenPeriodList={onTogglePeriodList}
              touchedPeriodTitle={touchedPeriod.title}
            />
            {isOpenPeriodList && (
              <MenuList
                onChangeTouchedPeriod={onChangeTouchedPeriod}
                menuList={periodList}
              />
            )}
          </GoBackHeader>
          <DatePaginator
            onChangeDate={onChangeTouchedDate}
            thouchedDate={thouchedDate}
            touchedPeriod={touchedPeriod}
          />
          <HistoryTable
            allSum={allSum}
            // allSum="0"
            transactions={filtredCatTrans}
            onOpenCategoryDetails={onOpenCategoryDetails}
          />
        </Route>
      </Switch>
    </BaseSection>
  );
};

const mapStateToProps = (state) => ({
  costs: state.transactions.costs,
  incomes: state.transactions.incomes,
});

export default connect(mapStateToProps)(TransactionsHistoryPage);
