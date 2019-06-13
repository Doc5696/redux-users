import React from 'react';
import EditUserForm from './styles/EditUserForm'

function EditForm(props) {
  const handleNewNameChange = props.handleNewNameChange;
  return (
    <EditUserForm>
      <input
        type="text"
        name="newUserName"
        id="newName"
        value={props.user.newName}
        onChange={e => handleNewNameChange(e)}
      />
    </EditUserForm>
  )
}

export default EditForm;