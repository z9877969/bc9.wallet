import { useLocation } from "react-router-dom";
import CategoryDetailsListItem from "./CategoryDetailsListItem/CategoryDetailsListItem";
import s from "./CategoryDetailsList.module.scss";

const CategoryDetailsList = ({ detailsList }) => {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {detailsList.map(({ id, ...detailsItem }) => (
        <CategoryDetailsListItem {...detailsItem} key={id} className={s.item} />
      ))}
    </ul>
  );
};

export default CategoryDetailsList;
