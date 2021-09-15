import { useEffect, useState, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Route, Switch, useRouteMatch } from "react-router-dom";
import DatePaginator from "../components/DatePaginator/DatePaginator";
import HistoryTable from "../components/HistoryTable/HistoryTable";
import GoBackHeader from "../components/_share/GoBackHeader/GoBackHeader";
import BaseSection from "../components/_share/BaseSection/BaseSection";
import HistoryHeaderBtns from "../components/HistoryHeaderBtns/HistoryHeaderBtns";
import MenuList from "../components/MenuList/MenuList";
import periodList from "../assets/periodList.json";
import dateApi from "../utils/withPeriods/classDataByPeriod";
import { useDate } from "../hooks/useDate";
import {
  getCurTransactions,
  getTransactions,
} from "../redux/transactions/transactionsSelectors";
import {
  resetType,
  setCostsType,
  setIncomesType,
} from "../redux/transactions/transactionsActions";
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
  const [categoryDetailsName, setCategoryDetailsName] = useState("");

  const date = useDate();

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
    date.handleChangePeriod(periodObj);
    onTogglePeriodList();
  };

  const allSum = curTransactions.reduce((acc, { sum }) => acc + Number(sum), 0);

  const filtredCatTrans = dateApi.getDataListOfCategories({
    data: curTransactions,
    date: date.startDate,
    period: date.touchedPeriod.name,
  });

  useEffect(() => {
    const { transType } = params;
    transType === "incomes"
      ? dispatch(setIncomesType())
      : dispatch(setCostsType());
    return () => dispatch(resetType());
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
              touchedPeriodTitle={date.touchedPeriod.title}
            />
            {isOpenPeriodList && (
              <MenuList
                onChangeTouchedPeriod={onChangeTouchedPeriod}
                menuList={periodList}
              />
            )}
          </GoBackHeader>
          <DatePaginator {...date} />
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

export default TransactionsHistoryPage;
