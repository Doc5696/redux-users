import styled from "styled-components";

const EditUserForm = styled.div`
  input {
    font-size: 14pt;
    padding: 1px 1vmin;
  }
  button {
    border: 1px solid transparent;
    padding: 5px 20px;
    min-width: 80px;
    margin: 0 5px;
    color: #fff;
    background-color: rgb(0, 141, 210);
    transition: 0.15s;
    outline: none;
    &:hover {
      cursor: pointer;
      background-color: #fff;
      color: rgb(0, 141, 210);
      border: 1px solid rgb(0, 141, 210);
    }
  }
`;

export default EditUserForm;
