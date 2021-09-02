import BaseSection from "../components/_share/BaseSection/BaseSection";
import MainInfo from "../components/MainInfo/MainInfo";
import ButtonsToHistory from "../components/ButtonsToHistory/ButtonsToHistory";
import {
  incomesMainInfo,
  costsMainInfo,
  balanceMainInfo,
} from "../assets/mainInfo.json";

const MainPage = ({ costs, incomes, history }) => {

  const handleOpenTransaction = (transType) => {
    const nextLocation =
      transType === "balance"
        ? {
          pathname: `/${transType}`,
          state: { from: history.location },
        }
        : {
          pathname: `/transaction/${transType}`,
          state: { from: history.location },
        };
    history.push(nextLocation);
  };

  const handleOpenHistory = (transType) => {
    const nextLocation = {
      pathname: `/history/${transType}`,
      state: { from: history.location }
    }
    history.push(nextLocation);
  }

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
      <ButtonsToHistory handleOpenTransaction={handleOpenHistory} />
    </BaseSection>
  );
};

export default MainPage;
