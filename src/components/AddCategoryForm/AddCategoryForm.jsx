import { Component } from "react";
import sprite from "../../assets/icons/symbol-defs.svg";
import { Form } from "./AddCategoryForm.style";
import shortid from "shortid";

class AddCategoryForm extends Component {
  state = { category: "" };

  handleChange = (e) => {
    this.setState({ category: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { transType, handleAddCategory } = this.props;
    const { category } = this.state;

    handleAddCategory({
      transType: transType,
      category: {
        title: category,
        name: shortid.generate(),
      },
    });

    this.reset();
  };

  reset = () => this.setState({ category: "" });
  render() {
    const { category } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={category}
          placeholder="Новая категория..."
          onChange={this.handleChange}
        />
        <button>
          <svg>
            <use href={sprite + "#icon-close"}></use>
          </svg>
        </button>
      </Form>
    );
  }
}

export default AddCategoryForm;
