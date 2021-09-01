import { useState } from "react";
import DatePaginator from "../components/DatePaginator/DatePaginator";
import HistoryTable from "../components/HistoryTable/HistoryTable";
import GoBackHeader from "../components/_share/GoBackHeader/GoBackHeader";
import BaseSection from "../components/_share/BaseSection/BaseSection";
import HistoryHeaderBtns from "../components/HistoryHeaderBtns/HistoryHeaderBtns";
import MenuList from "../components/MenuList/MenuList";
import periodList from "../assets/periodList.json";
import dateApi from "../utils/withPeriods/classDataByPeriod";
import CategoryDetailsList from "../components/CategoryDetailsList/CategoryDetailsList";

const TransactionsHistoryPage = ({ handleReturnToMainPage, transactions }) => {
  const [isOpenPeriodList, setIsOpenPeriodList] = useState(false);
  const [touchedPeriod, setTouchedPeriod] = useState(periodList[0]);
  const [thouchedDate, setThouchedDate] = useState(dateApi.current);
  const [isCategoryDetails, setIsCategoryDetails] = useState(false);
  const [categoryDetailsName, setCategoryDetailsName] = useState("");

  const onToggleCategoryDetails = () => {
    setIsCategoryDetails((prevState) => !prevState);
  };

  const onOpenCategoryDetails = (category) => {
    setCategoryDetailsName(category);
    onToggleCategoryDetails();
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

  const allSum = transactions.reduce((acc, { sum }) => acc + Number(sum), 0);

  const filtredCatTrans = dateApi.getDataListOfCategories({
    data: transactions,
    date: thouchedDate,
    period: touchedPeriod.name,
  });

  return (
    <BaseSection>
      <GoBackHeader
        handleGoBack={
          !isCategoryDetails ? handleReturnToMainPage : onToggleCategoryDetails
        }
        title={isCategoryDetails && categoryDetailsName}
      >
        {!isCategoryDetails && (
          <>
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
          </>
        )}
      </GoBackHeader>
      {!isCategoryDetails ? (
        <>
          <DatePaginator
            onChangeDate={onChangeTouchedDate}
            thouchedDate={thouchedDate}
            touchedPeriod={touchedPeriod}
          />
          <HistoryTable
            allSum={allSum}
            transactions={filtredCatTrans}
            onOpenCategoryDetails={onOpenCategoryDetails}
          />
        </>
      ) : (
        <CategoryDetailsList
          detailsList={filtredCatTrans[categoryDetailsName].data}
        />
      )}
    </BaseSection>
  );
};

export default TransactionsHistoryPage;
