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
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleNewNameChange = this.handleNewNameChange.bind(this);
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleRemoveUser = this.handleRemoveUser.bind(this);
  }

  // GETTING LIST OF USERS

  componentDidMount() {
    this.props.getUsers();
  }

  // CREATING NEW USER

  handleNameChange(e) {
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        name: e.target.value
      }
    });
  }

  handleAddUser(e) {
    e.preventDefault();
    this.props.addUser({ name: this.state.user.name });
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        name: ""
      }
    });
  }

  // CHANGING USER FROM LIST

  handleNewNameChange(e) {
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        newName: e.target.value
      }
    });
  }

  handleChangeUser = user => {
    this.props.editUser(user);
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        name: this.state.newName
      }
    });
  };

  // REMOVING USER FROM LIST

  handleRemoveUser(user) {
    this.props.removeUser(user);
  }

  render() {
    return (
      <MainContainer>
        <AddForm
          handleNameChange={this.handleNameChange}
          user={this.state.user}
          handleAddUser={this.handleAddUser}
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
