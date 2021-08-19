import styled from "styled-components";

export const List = styled.ul`
  font-size: 18px;
  text-align: left;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  padding: 5px 0;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
    font-size: 18px;
    font-weight: 800;
    background: none;
    border: none;
    transform: rotate(90deg);
    text-align: center;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
