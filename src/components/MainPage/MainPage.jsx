import BaseSection from "../BaseSection/BaseSection";
import MainInfo from "../MainInfo/MainInfo";
import {
  incomesMainInfo,
  costsMainInfo,
  balanceMainInfo,
} from "../../assets/mainInfo.json";

const MainPage = () => {
  return (
    <BaseSection title={"Журнал расходов"}>
      <MainInfo
        title={"Расходы"}
        periodsOpts={costsMainInfo}
        titleColor="costs"
        buttonIcon="icon-plus"
      />
      <MainInfo
        title={"Доходы"}
        periodsOpts={incomesMainInfo}
        titleColor="incomes"
        buttonIcon="icon-plus"
      />
      <MainInfo
        title={"Баланс"}
        periodsOpts={balanceMainInfo}
        titleColor="balance"
        buttonIcon="icon-navigation-more"
      />
      <button type="button">Все расходы</button>
      <button type="button">Все доходы</button>
    </BaseSection>
  );
};

export default MainPage;
