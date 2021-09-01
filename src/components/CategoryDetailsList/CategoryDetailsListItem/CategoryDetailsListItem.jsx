import dateApi from "../../../utils/withPeriods/classDataByPeriod";

const CategoryDetailsListItem = ({
  comment,
  currency,
  date,
  sum,
  time,
  className,
}) => (
  <li className={className}>
    <p className="commentDate">
      <span>{`${dateApi.getWeekDay(date)}, ${date} ${time}`}</span>
      <span>{comment}</span>
    </p>
    <button className="menuBtn" type="button">
      <span>{sum}</span>
      <span>{currency}</span>
    </button>
  </li>
);

export default CategoryDetailsListItem;
