import PropTypes from "prop-types";
import s from "./MainInfo.module.scss";
import sprite from "../../assets/icons/symbol-defs.svg";

const MainInfo = ({
  title,
  periodsOpts,
  titleColor,
  buttonIcon,
  mainInfoType,
  handleOpenTransaction,
}) => {
  return (
    <section className={s.section}>
      <div className={s.wrapper}>
        <div className={s.header}>
          <h2 className={`${s.title} ${s[titleColor]}`}>{title}</h2>
          <p className={s.currency}>USD</p>
        </div>
        <ul className={s.list}>
          {periodsOpts.map(({ title, sum, name }) => (
            <li key={name} className={s.item}>
              <span className={s.period}>{title}</span>
              <span className={s.sum}>{sum}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => handleOpenTransaction(mainInfoType)}
        className={`${s.button} ${s[titleColor]}`}
      >
        <svg className={s.icon}>
          <use href={`${sprite}#${buttonIcon}`}></use>
        </svg>
      </button>
    </section>
  );
};

MainInfo.propTypes = {
  title: PropTypes.string.isRequired,
  periodsOpts: PropTypes.array.isRequired,
  titleColor: PropTypes.string.isRequired,
  buttonIcon: PropTypes.string,
  handleOpenTransaction: PropTypes.func.isRequired,
};

export default MainInfo;
