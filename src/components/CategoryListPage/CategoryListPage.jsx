import GoBackHeader from "../_share/GoBackHeader/GoBackHeader";
import Section from "../_share/Section/Section";
import {
  costsCategoryList,
  incomesCategoryList,
} from "../../assets/categoryList.json";

const CategoryListPage = () => {
  return (
    <Section>
      <GoBackHeader title={"Расходы"} />
      <ul>
        {costsCategoryList.map((el) => (
          <li key={el.name}>
            <span>{el.title}</span>
            <button name={el.name} type="button">
              ...
            </button>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default CategoryListPage;
