import { useState } from "react";
import sprite from "../../assets/icons/symbol-defs.svg";
import { Form } from "./AddCategoryForm.style";
import shortid from "shortid";

const AddCategoryForm = ({ transType, handleAddCategory } ) => {
  const [category, setCategory] = useState('')
  

  const handleChange = (e) => {
    setCategory(e.target.value );
  };

 const handleSubmit = (e) => {
    e.preventDefault();    

    handleAddCategory({
      transType,
      category: {
        title: category,
        name: shortid.generate(),
      },
    });

    setCategory('')
  };
      
    return (
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={category}
          placeholder="Новая категория..."
          onChange={handleChange}
        />
        <button>
          <svg>
            <use href={sprite + "#icon-close"}></use>
          </svg>
        </button>
      </Form>
    );
  
}

export default AddCategoryForm;
