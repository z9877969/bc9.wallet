import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import s from "./DatePaginator.module.scss";
import sprite from "../../assets/icons/symbol-defs.svg";
import dateApi from "../../utils/withPeriods/classDataByPeriod";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
registerLocale("ru", ru);

const DatePaginator = ({
  startDate,
  touchedPeriod,
  handleChange,
  handleNext,
  handlePrev,
}) => {
  const tochedInfo = dateApi.getDateOfPeriodStr({
    date: startDate,
    period: touchedPeriod.name,
  });

  return (
    <div className={s.conteiner}>
      <button onClick={handlePrev} className={s.btn} type="button">
        <svg className={s.svg}>
          <use href={sprite + "#icon-cheveron-left"}></use>
        </svg>
      </button>
      <label>
        <span>{tochedInfo}</span>
        <DatePicker
          selected={startDate}
          locale="ru"
          onSelect={handleChange}
          onChange={handleChange}
          className="date-paginator"
        />
      </label>
      <button onClick={handleNext} className={s.btn} type="button">
        <svg className={s.svg}>
          <use href={sprite + "#icon-cheveron-right"}></use>
        </svg>
      </button>
    </div>
  );
};

export default DatePaginator;
