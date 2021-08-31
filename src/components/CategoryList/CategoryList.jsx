import { List, Item } from "./CategoriListStyle";
import sprite from "../../assets/icons/symbol-defs.svg";

const CategoryList = ({ categoryList, handleSetCategory }) => {
  return (
    <List>
      {categoryList.map(({ title, name }) => (
        <Item key={name}>
          <button
            type="button"
            onClick={() => handleSetCategory(["category", title])}
          >
            {title}
          </button>
          <button name={name} type="button" className="button">
            <svg>
              <use href={sprite + "#icon-navigation-more"}></use>
            </svg>
          </button>
        </Item>
      ))}
    </List>
  );
};

export default CategoryList;
