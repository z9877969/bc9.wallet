import LabelInput from "../_share/LabelInput/LabelInput";
import s from "./TransactionForm.module.scss";

const TransactionForm = ({
  handleToggleCatList,
  handleChange,
  dataForm,
  handleSubmit,
}) => {
  const { date, time, category, sum, currency, comment } = dataForm;
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <LabelInput
        className={s.label}
        value={date}
        title="День"
        type="date"
        name="date"
        cbOnChange={handleChange}
      />
      <LabelInput
        className={s.label}
        value={time}
        title="Время"
        type="time"
        name="time"
        cbOnChange={handleChange}
      />
      <LabelInput
        className={s.label}
        value={category}
        title="Категория"
        type="button"
        name="category"
        cbOnClick={handleToggleCatList}
      />
      <LabelInput
        className={s.label}
        value={sum}
        title="Сумма"
        name="sum"
        placeholder="Введите сумму"
        cbOnChange={handleChange}
      />
      <LabelInput
        className={s.label}
        value={currency}
        title="Валюта"
        type="button"
        name="currency"
      />
      <LabelInput
        className={s.label}
        value={comment}
        name="comment"
        placeholder="Комментарий..."
        cbOnChange={handleChange}
      />
      <button type="submit">OK</button>
    </form>
  );
};

export default TransactionForm;
