import s from "./ButtonsToHistory.module.scss";

const ButtonsToHistory = ({ handleOpenTransaction }) => {
  return (
    <div className={s.container}>
      <button
        onClick={() => handleOpenTransaction("costsHistory")}
        className={s.button}
        type="button"
      >
        Все расходы
      </button>
      <button
        onClick={() => handleOpenTransaction("incomesHistory")}
        className={s.button}
        type="button"
      >
        Все доходы
      </button>
    </div>
  );
};

export default ButtonsToHistory;
