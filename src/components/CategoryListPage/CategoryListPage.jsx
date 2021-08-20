import GoBackHeader from "../_share/GoBackHeader/GoBackHeader";
import Section from "../_share/Section/Section";
import BaseSection from "../_share/BaseSection/BaseSection";
import AddCategoryForm from "../AddCategoryForm/AddCategoryForm";
import CategoryList from "../CategoryList/CategoryList";

import {
  costsCategoryList,
  incomesCategoryList,
} from "../../assets/categoryList.json";

const CategoryListPage = ({
  handleToggleCatList,
  handleSetCategory,
  transType,
}) => {
  
  const categoryList =
    transType === "incomes" ? incomesCategoryList : costsCategoryList;

  return (
    <BaseSection>
      <GoBackHeader title={"Расходы"} handleGoBack={handleToggleCatList} />
      <CategoryList
        categoryList={categoryList}
        handleSetCategory={handleSetCategory}
      />
      <AddCategoryForm />
    </BaseSection>
  );
};

export default CategoryListPage;
