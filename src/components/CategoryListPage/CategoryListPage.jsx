import GoBackHeader from "../_share/GoBackHeader/GoBackHeader";
import Section from "../_share/Section/Section";
import BaseSection from "../_share/BaseSection/BaseSection";
import AddCategoryForm from "../AddCategoryForm/AddCategoryForm";
import CategoryList from "../CategoryList/CategoryList";


const CategoryListPage = ({
  handleToggleCatList,
  handleSetCategory,
  transType,
  handleAddCategory,
  categoryList,
}) => {


  return (
    <BaseSection>
      <GoBackHeader
        title={transType === "incomes" ? "Доходы" : "Расходы"}
        handleGoBack={handleToggleCatList}
      />
      <CategoryList
        categoryList={categoryList}
        handleSetCategory={handleSetCategory}
      />
      <AddCategoryForm
        handleAddCategory={handleAddCategory}
        transType={transType}
      />
    </BaseSection>
  );
};

export default CategoryListPage;
