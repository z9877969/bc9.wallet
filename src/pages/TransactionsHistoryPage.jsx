import { useState, lazy } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  useHistory,
  useParams,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import DatePaginator from "../components/DatePaginator/DatePaginator";
import HistoryTable from "../components/HistoryTable/HistoryTable";
import GoBackHeader from "../components/_share/GoBackHeader/GoBackHeader";
import BaseSection from "../components/_share/BaseSection/BaseSection";
import HistoryHeaderBtns from "../components/HistoryHeaderBtns/HistoryHeaderBtns";
import MenuList from "../components/MenuList/MenuList";
import periodList from "../assets/periodList.json";
import dateApi from "../utils/withPeriods/classDataByPeriod";
import {
  getCurTransactions,
  getTransactions,
} from "../redux/transactions/transactionsSelectors";
import { useEffect } from "react";
import {
  setCostsType,
  setIncomesType,
} from "../redux/transactions/transactionsActions";
import { getTouchedPeriod } from "../redux/history/historySelector";
import { setTouchedPeriod } from "../redux/history/historyActions";
const CategoryDetailsList = lazy(() =>
  import(
    "../components/CategoryDetailsList/CategoryDetailsList" /* webpackChunkName: "category-details-list"*/
  )
);

const TransactionsHistoryPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { url, path, params } = useRouteMatch();

  const curTransactions = useSelector(getCurTransactions);
  const [isOpenPeriodList, setIsOpenPeriodList] = useState(false);
  const touchedPeriod = useSelector(getTouchedPeriod);
  const [thouchedDate, setThouchedDate] = useState(dateApi.current);
  const [categoryDetailsName, setCategoryDetailsName] = useState("");

  const onOpenCategoryDetails = (category) => {
    const nextLocation = {
      pathname: `${url}/details`,
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
    dispatch(setTouchedPeriod(periodObj));
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

  useEffect(() => {
    const { transType } = params;
    transType === "incomes"
      ? dispatch(setIncomesType())
      : dispatch(setCostsType());
  }, []);

  return (
    <BaseSection>
      <Switch>
        <Route path={path + "/details"}>
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

// const mapStateToProps = (state) => ({
//   costs: state.transactions.costs,
//   incomes: state.transactions.incomes,
// });

export default TransactionsHistoryPage;
