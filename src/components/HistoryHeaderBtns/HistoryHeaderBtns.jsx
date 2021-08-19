import LabelInput from "../_share/LabelInput/LabelInput";
import s from "./HistoryHeaderBtns.module.scss";

const HistoryHeaderBtns = () => {
  return (
    <div className={s.container}>
      <LabelInput
        className={s.labelBt}
        type="button"
        name="selectPeriod"
        value={"День"}
      />
      <button type="button">diagram icon</button>
    </div>
  );
};

export default HistoryHeaderBtns;
