import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  input {
    outline: none;
    width: 94%;
    border: none;
    border-bottom: 1px solid gray;
    background: none;
  }
  button {
    width: 20px;
    height: 20px;
    padding: 3px;
    border: none;
    background: none;
  }
  svg {
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
  }
`;
