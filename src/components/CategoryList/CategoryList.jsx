import { List, Item } from "./CategoriListStyle";
import sprite from "../../assets/icons/symbol-defs.svg";

const CategoryList = ({ categoryList }) => {
  return (
    <List>
      {categoryList.map((el) => (
        <Item key={el.name}>
          <span>{el.title}</span>
          <button name={el.name} type="button">
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
