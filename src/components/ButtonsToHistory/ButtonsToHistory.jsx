import s from "./ButtonsToHistory.module.scss";

const ButtonsToHistory = ({ handleOpenTransaction }) => {
  return (
    <div className={s.container}>
      <button
        onClick={() => handleOpenTransaction("costs")}
        className={s.button}
        type="button"
      >
        Все расходы
      </button>
      <button
        onClick={() => handleOpenTransaction("incomes")}
        className={s.button}
        type="button"
      >
        Все доходы
      </button>
    </div>
  );
};

export default ButtonsToHistory;
