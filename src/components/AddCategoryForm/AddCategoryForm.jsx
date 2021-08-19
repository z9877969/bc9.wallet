import sprite from "../../assets/icons/symbol-defs.svg";
import { Form } from "./AddCategoryForm.style";

const AddCategoryForm = () => {
  return (
    <Form>
      <input type="text" placeholder="Новая категория..." />
      <button>
        <svg>
          <use href={sprite + "#icon-close"}></use>
        </svg>
      </button>
    </Form>
  );
};

export default AddCategoryForm;
