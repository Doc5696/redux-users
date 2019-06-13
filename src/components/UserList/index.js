import React from 'react';
import User from '../User'

function UserList(props) {
  const users = props.users;
  return (
    <ul>
      {users.map(user =>
        <User name={user.name} key={user._id} />)}
    </ul>
  )
}

export default UserList;