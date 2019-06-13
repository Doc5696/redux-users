import React from 'react';

function AddForm(props) {
  const handleNameChange = props.handleNameChange;
  const handleAddUser = props.handleAddUser;
  return (
    <form>
      <input
        type="text"
        name="userName"
        id="name"
        value={props.user.name}
        onChange={e => handleNameChange(e)}
      />
      <button
        type="submit"
        onClick={e => handleAddUser(e)}
      >
        Submit
      </button>
    </form>
  )
}

export default AddForm;