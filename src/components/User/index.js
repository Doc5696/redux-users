import React, { useState, useEffect } from "react";
import UserButtons from "./styles/UserButtons";
import UserActionButton from "./styles/UserActionButton";
import "./styles/animations.css";
import EditForm from "../EditForm";

function User(props) {
  const handleRemoveUser = props.handleRemoveUser;
  const handleChangeUser = props.handleChangeUser;
  const [isActive, toggleActive] = useState(false);
  let isVisible = true;

  useEffect(() => {
    return () => {
      isVisible = !isVisible;
    };
  }, []);

  return (
    <li className={isVisible ? "mounting" : "unMounting"}>
      {isActive ? (
        <EditForm
          currentName={props.name}
          user={props.user}
          handleNewNameChange={props.handleNewNameChange}
        />
      ) : (
        <span>{props.name}</span>
      )}
      <UserButtons>
        {isActive ? (
          <UserActionButton
            removeButton={false}
            onClick={() => {
              toggleActive(!isActive);
              handleChangeUser(props);
            }}>
            Save
          </UserActionButton>
        ) : (
          <UserActionButton
            type="submit"
            removeButton={false}
            onClick={() => {
              toggleActive(!isActive);
            }}>
            Edit
          </UserActionButton>
        )}
        <UserActionButton
          removeButton={true}
          onClick={() => {
            handleRemoveUser(props);
          }}>
          Delete
        </UserActionButton>
      </UserButtons>
    </li>
  );
}

export default User;
