import React from "react";
import EditUserForm from "./styles/EditUserForm";

function EditForm(props) {
  const handleNewNameChange = props.handleNewNameChange;
  let newName = props.newName;
  let currentName = props.currentName;
  return (
    <EditUserForm>
      <input
        type="text"
        name="newUserName"
        id="newName"
        defaultValue={currentName}
        value={newName}
        onChange={e => handleNewNameChange(e)}
      />
    </EditUserForm>
  );
}

export default EditForm;
