import GoBackHeader from "../components/_share/GoBackHeader/GoBackHeader";
import BaseSection from "../components/_share/BaseSection/BaseSection";
import AddCategoryForm from "../components/AddCategoryForm/AddCategoryForm";
import CategoryList from "../components/CategoryList/CategoryList";

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
