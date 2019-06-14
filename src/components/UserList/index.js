import React from 'react';
import User from '../User';
import ListOfUsers from './styles/ListOfUsers';

function UserList(props) {
  const users = props.users;
  return (
    <ListOfUsers>
      {users.map(user =>
        <User
          name={user.name}
          userId={user._id}
          key={user._id}
          isActive={props.isActive}
          user={props.user}
          handleNewNameChange={props.handleNewNameChange}
          handleReamoveUser={props.handleReamoveUser}
          handleChangeUser={props.handleChangeUser}
        />)}
    </ListOfUsers>
  )
}

export default UserList;