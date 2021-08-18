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
      <MainInfo title={"Расходы"} periodsOpts={costsMainInfo} />
      <MainInfo title={"Доходы"} periodsOpts={incomesMainInfo} />
      <MainInfo title={"Баланс"} periodsOpts={balanceMainInfo} />
      <button type="button">Все расходы</button>
      <button type="button">Все доходы</button>
    </BaseSection>
  );
};

export default MainPage;
