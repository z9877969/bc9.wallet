import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTouchedPeriod } from "../redux/history/historyActions";
import { getTouchedPeriod } from "../redux/history/historySelector";
import dateApi from "../utils/withPeriods/classDataByPeriod";

export const useDate = () => {
  const dispatch = useDispatch();
  const touchedPeriod = useSelector(getTouchedPeriod);
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => setStartDate(date);

  const handleNext = () => {
    const date = dateApi.setUpdatingDate(
      startDate,
      touchedPeriod,
      dateApi.direction.RIGHT
    );
    setStartDate(date);
  };

  const handlePrev = () => {
    const date = dateApi.setUpdatingDate(
      startDate,
      touchedPeriod,
      dateApi.direction.LEFT
    );
    setStartDate(date);
  };

  const handleChangePeriod = (periodObj) =>
    dispatch(setTouchedPeriod(periodObj));
    
  return {
    startDate,
    touchedPeriod,
    handleChange,
    handleNext,
    handlePrev,
    handleChangePeriod,
  };
};
