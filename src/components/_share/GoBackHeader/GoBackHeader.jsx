import { useHistory } from "react-router-dom";
import s from "./GoBackHeader.module.scss";
import sprite from "../../../assets/icons/symbol-defs.svg";

const GoBackHeader = ({ title, children, handleGoBack }) => {
  const history = useHistory();
  const { location } = history;

  const handlerGoBack = () => history.push(location.state?.from || "/");

  return (
    <header className={s.header}>
      <button onClick={handlerGoBack} className={s.button} type="button">
        <svg className={s.icon}>
          <use href={sprite + "#icon-arrow-left"}></use>
        </svg>
      </button>
      {!children ? <h1 className={s.title}>{title}</h1> : children}
    </header>
  );
};

export default GoBackHeader;
