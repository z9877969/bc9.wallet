import { useHistory, useRouteMatch } from "react-router-dom";
import dateApi from "../../../utils/withPeriods/classDataByPeriod";

const CategoryDetailsListItem = ({
  comment,
  currency,
  date,
  sum,
  time,
  className,
  id,
}) => {
  const history = useHistory();
  const { params } = useRouteMatch();
  const handleEditTransaction = () =>
    history.push({
      pathname: `/transaction/${params.transType}/${id}`,
    });

  return (
    <li className={className}>
      <p className="commentDate">
        <span>{`${dateApi.getWeekDay(date)}, ${date} ${time}`}</span>
        <span>{comment}</span>
      </p>
      <button onClick={handleEditTransaction} className="menuBtn" type="button">
        <span>{sum}</span>
        <span>{currency}</span>
      </button>
    </li>
  );
};

export default CategoryDetailsListItem;
