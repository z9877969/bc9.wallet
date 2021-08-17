import LabelInput from "../_share/LabelInput/LabelInput";
const TransactionForm = () => {
  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <LabelInput value="" title="День" type="date" name="date" />
      <LabelInput value="" title="Время" type="time" name="time" />
      <LabelInput value="Еда" title="Категория" type="button" name="category" />
      <LabelInput
        value=""
        title="Сумма"
        name="sum"
        placeholder="Введите сумму"
      />
      <LabelInput value="USD" title="Валюта" type="button" name="currency" />
      <LabelInput value="" name="comment" placeholder="Комментарий..." />
    </form>
  );
};

export default TransactionForm;
