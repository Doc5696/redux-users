import React from "react";
import CreateUserForm from "./styles/CreateUserForm";

function AddForm(props) {
  const handleNameChange = props.handleNameChange;
  const handleAddUser = props.handleAddUser;
  return (
    <CreateUserForm>
      <input
        type="text"
        name="userName"
        id="name"
        value={props.user.name}
        onChange={e => handleNameChange(e)}
      />
      <button type="submit" onClick={e => handleAddUser(e)}>
        Submit
      </button>
    </CreateUserForm>
  );
}

export default AddForm;
