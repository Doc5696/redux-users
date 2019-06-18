import React from "react";
import UserButtons from "./styles/UserButtons";
import UserActionButton from "./styles/UserActionButton";
import "./styles/animations.css";
import EditForm from "../EditForm";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isVisible: Boolean
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      isVisible: true
    });
  }

  componentWillUnmount() {
    this.setState({
      ...this.state,
      isVisible: false
    });
  }

  toggleActive = () => {
    this.setState({
      ...this.state,
      isActive: !this.state.isActive
    });
  };

  render() {
    const { isActive, isVisible } = this.state;
    const toggleActive = this.toggleActive;
    const handleChangeUser = this.props.handleChangeUser;
    const handleRemoveUser = this.props.handleRemoveUser;
    return (
      <li className={isVisible ? "mounting" : "unMounting"}>
        {isActive ? (
          <EditForm
            currentName={this.props.name}
            userId={this.props.userId}
            user={this.props.user}
            toggleActive={this.toggleActive}
            handleNewNameChange={this.props.handleNewNameChange}
            handleChangeUser={v => {
              handleChangeUser(v);
              toggleActive(!isActive);
            }}
          />
        ) : (
          <span>{this.props.name}</span>
        )}
        <UserButtons>
          {isActive ? (
            false
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
              handleRemoveUser(this.props);
            }}>
            Delete
          </UserActionButton>
        </UserButtons>
      </li>
    );
  }
}

export default User;
