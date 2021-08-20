import GoBackHeader from "../_share/GoBackHeader/GoBackHeader";

const BalancePage = ({ handleReturnToMainPage }) => {
  return (
    <GoBackHeader title={"BalancePage"} handleGoBack={handleReturnToMainPage} />
  );
};

export default BalancePage;
