import BaseSection from '../_share/BaseSection/BaseSection';
import GoBackHeader from "../_share/GoBackHeader/GoBackHeader";
import TransactionForm from "../TransactionForm/TransactionForm";

const TransactionPage = () => {
  return (
    <BaseSection>
      <GoBackHeader title={"Расходы"} />
      <TransactionForm />
    </BaseSection>
  );
};

export default TransactionPage;
