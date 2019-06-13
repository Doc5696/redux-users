import styled from 'styled-components';

const CreateUserForm = styled.form`
  display: flex;
  padding: 2vmin 0;
  input{
    font-size: 16pt;
    padding: 5px;
    border-radius: 5px 0 0 5px;
    border: 1px solid rgb(0, 141, 210);
    outline: none;
    min-width: 20vw;
    transition: 0.15s;
    box-sizing: border-box;
    &:focus{
      border: 1px solid rgb(0, 86, 128);
      box-shadow: 4px 4px 20px -9px rgba(0, 141, 210,0.56);
    }
  }
  button{
    background-color: rgb(0, 141, 210);
    padding: 0 2vmin;
    border: 1px solid rgb(0, 141, 210);
    box-sizing: border-box;
    color: #fff;
    font-weight: bold;
    transition: 0.15s;
    border-radius: 0 5px 5px 0;
    &:hover{
      box-shadow: 4px 4px 20px -9px rgba(0, 141, 210,0.56);
      cursor: pointer;
      border: 1px solid rgb(0, 89, 128);
    }
  }
  
`



export default CreateUserForm;