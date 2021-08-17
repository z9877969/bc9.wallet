import GoBackHeader from "../_share/GoBackHeader/GoBackHeader";
import TransactionForm from "../TransactionForm/TransactionForm";

const TransactionPage = () => {
  return (
    <>
      <GoBackHeader title={"Расходы"} />
      <TransactionForm />
    </>
  );
};

export default TransactionPage;
