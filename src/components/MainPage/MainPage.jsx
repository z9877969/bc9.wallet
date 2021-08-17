import MainInfo from "../MainInfo/MainInfo";
import {
  incomesMainInfo,
  costsMainInfo,
  balanceMainInfo,
} from "../../assets/mainInfo.json";

const MainPage = () => {
  return (
    <>
      <h1>Журнал расходов</h1>
      <MainInfo title={"Расходы"} periodsOpts={costsMainInfo} />
      <MainInfo title={"Доходы"} periodsOpts={incomesMainInfo} />
      <MainInfo title={"Баланс"} periodsOpts={balanceMainInfo} />
    </>
  );
};

export default MainPage;
