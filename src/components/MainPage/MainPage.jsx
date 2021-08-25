import BaseSection from "../_share/BaseSection/BaseSection";
import MainInfo from "../MainInfo/MainInfo";
import ButtonsToHistory from "../ButtonsToHistory/ButtonsToHistory";
import {
  incomesMainInfo,
  costsMainInfo,
  balanceMainInfo,
} from "../../assets/mainInfo.json";

const MainPage = ({ handleOpenTransaction, costs, incomes }) => {
  return (
    <BaseSection title={"Журнал расходов"}>
      <MainInfo
        handleOpenTransaction={handleOpenTransaction}
        title={"Расходы"}
        periodsOpts={costsMainInfo}
        titleColor="costs"
        mainInfoType="costs"
        buttonIcon="icon-plus"
        transactions={costs}
      />
      <MainInfo
        handleOpenTransaction={handleOpenTransaction}
        title={"Доходы"}
        periodsOpts={incomesMainInfo}
        titleColor="incomes"
        mainInfoType="incomes"
        buttonIcon="icon-plus"
        transactions={incomes}
      />
      <MainInfo
        handleOpenTransaction={handleOpenTransaction}
        title={"Баланс"}
        periodsOpts={balanceMainInfo}
        titleColor="balance"
        mainInfoType="balance"
        buttonIcon="icon-navigation-more"
        // transactions={}
      />
      <ButtonsToHistory handleOpenTransaction={handleOpenTransaction} />
    </BaseSection>
  );
};

export default MainPage;
