import { Component } from "react";
import DatePaginator from "../DatePaginator/DatePaginator";
import HistoryTable from "../HistoryTable/HistoryTable";
import GoBackHeader from "../_share/GoBackHeader/GoBackHeader";
import LabelInput from "../_share/LabelInput/LabelInput";
import Section from "../_share/Section/Section";
import BaseSection from "../_share/BaseSection/BaseSection";
import HistoryHeaderBtns from "../HistoryHeaderBtns/HistoryHeaderBtns";
import MenuList from "../MenuList/MenuList"
import periodList from "../../assets/periodList.json"


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


class TransactionsHistoryPage extends Component {
 state = {
   isOpenPeriodList: false,   
 }
  onOpenPeriodList = () => {
  this.setState({isOpenPeriodList: true})
  }

  render  () {
    const {isOpenPeriodList} = this.state
    const { handleReturnToMainPage, dataCatList } = this.props    
    const allSum = dataCatList.reduce((acc, { sum }) => acc + Number(sum), 0);
     return (
    <BaseSection>
      <GoBackHeader handleGoBack={handleReturnToMainPage}>
        <HistoryHeaderBtns onOpenPeriodList={this.onOpenPeriodList}/>
        {isOpenPeriodList && <MenuList menuList={periodList} />}
      </GoBackHeader>
      <DatePaginator />
      <HistoryTable allSum={allSum} dataCatList={dataCatList} />
    </BaseSection>
  );
  } 

};

export default TransactionsHistoryPage;
