import s from "./GoBackHeader.module.scss";
import sprite from "../../../assets/icons/symbol-defs.svg";

const GoBackHeader = ({ title, children }) => {
  return (
    <header className={s.header}>
      <button className={s.button} type="button">
        <svg className={s.icon}>
          <use href={sprite + "#icon-arrow-left"}></use>
        </svg>
      </button>
      {!children ? <h1 className={s.title}>{title}</h1> : children}
    </header>
  );
};

export default GoBackHeader;
