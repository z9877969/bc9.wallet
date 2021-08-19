import DatePaginator from "../DatePaginator/DatePaginator";
import HistoryTable from "../HistoryTable/HistoryTable";
import GoBackHeader from "../_share/GoBackHeader/GoBackHeader";
import LabelInput from "../_share/LabelInput/LabelInput";
import Section from "../_share/Section/Section";
import BaseSection from "../_share/BaseSection/BaseSection";
import HistoryHeaderBtns from "../HistoryHeaderBtns/HistoryHeaderBtns";

const dataCatList = [
  {
    name: "drinks",
    title: "Напитки",
    sum: "2000",
  },
  {
    name: "food",
    title: "Еда",
    sum: "1000",
  },
  {
    name: "other",
    title: "Разное",
    sum: "500",
  },
];

const TransactionsHistoryPage = () => {
  const allSum = dataCatList.reduce((acc, { sum }) => acc + Number(sum), 0);
  return (
    <BaseSection>
      <GoBackHeader>
        <HistoryHeaderBtns />
      </GoBackHeader>
      <DatePaginator />
      <HistoryTable allSum={allSum} dataCatList={dataCatList} />
    </BaseSection>
  );
};

export default TransactionsHistoryPage;
