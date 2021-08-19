import s from './ButtonsToHistory.module.scss';

const ButtonsToHistory = () => {
  return (
    <>
      <button className={s.button} type="button">Все расходы</button>
      <button className={s.button} type="button">Все доходы</button>
    </>
  );
};

export default ButtonsToHistory;
