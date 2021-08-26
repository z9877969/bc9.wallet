import dateApi from '../../../utils/withPeriods/classDataByPeriod'


const CategoryDetailsListItem = ({ comment, currency, date, sum, time }) =>
    <li>
        <span>{dateApi.getWeekDay(date)}</span>
        <span>{date}</span>
        <span>{time}</span>
        <span>{comment}</span>
        <span>{sum}</span>
        <span>{currency}</span>
        <button type="button">...</button>
    </li>

export default CategoryDetailsListItem;