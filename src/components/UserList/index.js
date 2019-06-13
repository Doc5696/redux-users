import React from 'react';
import User from '../User';
import ListOfUsers from './styles/ListOfUsers';

function UserList(props) {
  const users = props.users;
  return (
    <ListOfUsers>
      {users.map(user =>
        <User name={user.name} key={user._id} />)}
    </ListOfUsers>
  )
}

export default UserList;