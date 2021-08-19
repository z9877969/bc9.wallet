import GoBackHeader from "../_share/GoBackHeader/GoBackHeader";
import Section from "../_share/Section/Section";
import BaseSection from "../_share/BaseSection/BaseSection";
import AddCategoryForm from "../AddCategoryForm/AddCategoryForm";
import CategoryList from "../CategoryList/CategoryList";

import {
  costsCategoryList,
  incomesCategoryList,
} from "../../assets/categoryList.json";

const CategoryListPage = () => {
  return (
    <BaseSection>
      <GoBackHeader title={"Расходы"} />
      <CategoryList categoryList={costsCategoryList} />
      <AddCategoryForm />
    </BaseSection>
  );
};

export default CategoryListPage;
