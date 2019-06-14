import styled from 'styled-components';

const UserActionButton = styled.button`
  border: 1px solid transparent;
  padding: 5px 20px;
  min-width: 80px;
  margin: 0 5px;
  color: #fff;
  background-color: ${props => (props.removeButton ? 'red' : 'rgb(0, 141, 210)')};
  transition: 0.15s;
  outline: none;
  &:hover{
    cursor: pointer;
    background-color: #fff;
    color: ${props => (props.removeButton ? 'red' : 'rgb(0, 141, 210)')};
    border: ${props => (props.removeButton ? '1px solid red' : '1px solid rgb(0, 141, 210)')};
  }
`

export default UserActionButton;