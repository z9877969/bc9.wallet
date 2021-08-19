import LabelInput from "../_share/LabelInput/LabelInput";
import s from "./DatePaginator.module.scss";
import sprite from "../../assets/icons/symbol-defs.svg";

const DatePaginator = () => {
  return (
    <div className={s.conteiner}>
      <button className={s.btn} type="button">
        <svg className={s.svg}>
          <use href={sprite + "#icon-cheveron-left"}></use>
        </svg>
      </button>
      <LabelInput className={s.label} type="date" title="17 августа 2021" />
      <button className={s.btn} type="button">
        <svg className={s.svg}>
          <use href={sprite + "#icon-cheveron-right"}></use>
        </svg>
      </button>
    </div>
  );
};

export default DatePaginator;
