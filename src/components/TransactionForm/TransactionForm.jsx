import LabelInput from "../_share/LabelInput/LabelInput";
import s from "./TransactionForm.module.scss";
const TransactionForm = () => {
  return (
    <form className={s.form}>
      <LabelInput
        className={s.label}
        value=""
        title="День"
        type="date"
        name="date"
      />
      <LabelInput
        className={s.label}
        value=""
        title="Время"
        type="time"
        name="time"
      />
      <LabelInput
        className={s.label}
        value="Еда"
        title="Категория"
        type="button"
        name="category"
      />
      <LabelInput
        className={s.label}
        value=""
        title="Сумма"
        name="sum"
        placeholder="Введите сумму"
      />
      <LabelInput className={s.label} value="USD" title="Валюта" type="button" name="currency" />
      <LabelInput className={s.label} value="" name="comment" placeholder="Комментарий..." />
    </form>
  );
};

export default TransactionForm;
