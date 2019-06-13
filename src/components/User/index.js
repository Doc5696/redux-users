import React from 'react';
import UserButtons from './styles/UserButtons';
import UserActionButton from './styles/UserActionButton';

function User(props) {
  return (
    <li>
      <span>
        {props.name}
      </span>
      <UserButtons>
        <UserActionButton>Edit</UserActionButton>
        <UserActionButton removeButton={true}>Delete</UserActionButton>
      </UserButtons>
    </li>
  )
}

export default User;