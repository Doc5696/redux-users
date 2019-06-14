import React, { useState } from 'react';
import UserButtons from './styles/UserButtons';
import UserActionButton from './styles/UserActionButton';
import EditForm from '../EditForm';

function User(props) {
  const handleReamoveUser = props.handleReamoveUser;
  const handleChangeUser = props.handleChangeUser;
  const [isActive, toggleActive] = useState(false);

  return (
    <li>
        {isActive ? (
          <EditForm 
            user={props.user}
            handleNewNameChange={props.handleNewNameChange}
          />
        ) : (
          <span>
            {props.name}
          </span>
        )}
        
      <UserButtons>
        {isActive ? (
          <UserActionButton
            removeButton={false}
            onClick={() => {
              toggleActive(!isActive);
              handleChangeUser(props)
            }}
          >
            Save
          </UserActionButton>
        ) : (
          <UserActionButton
            type="submit"
            removeButton={false}
            onClick={(e) => toggleActive(!isActive)}
          >
            Edit
          </UserActionButton>
        )}
        <UserActionButton
          removeButton={true}
          onClick={() => handleReamoveUser(props)}
        >
          Delete
        </UserActionButton>
      </UserButtons>
    </li>
  )
}

export default User;