import React from "react";
import AddForm from "../../components/AddForm";
import UserList from "../../components/UserList";
import MainContainer from "./styles/MainContainer";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        _id: "",
        newName: ""
      }
    };
    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleRemoveUser = this.handleRemoveUser.bind(this);
  }

  // GETTING LIST OF USERS

  componentDidMount() {
    this.props.getUsers();
  }

  // CREATING NEW USER

  handleAddUser(v) {
    this.props.addUser(v);
  }

  // CHANGING USER FROM LIST

  handleChangeUser(v) {
    this.props.editUser(v);
  }

  // REMOVING USER FROM LIST

  handleRemoveUser(user) {
    this.props.removeUser(user);
  }

  render() {
    return (
      <MainContainer>
        <AddForm
          handleNameChange={e => this.handleNameChange(e)}
          user={this.state.user}
          handleAddUser={v => this.handleAddUser(v)}
        />
        <UserList
          users={this.props.users}
          user={this.state.user}
          handleNewNameChange={this.handleNewNameChange}
          handleChangeUser={this.handleChangeUser}
          handleRemoveUser={this.handleRemoveUser}
        />
      </MainContainer>
    );
  }
}

export default Dashboard;
