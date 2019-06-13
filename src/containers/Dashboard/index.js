import React from 'react';
import AddForm from '../../components/AddForm';
import UserList from '../../components/UserList';


class Dashboard extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      user: {
        name: "",
        _id: ""
      }
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
  };

  componentDidMount(){
    this.props.getUsers()
  }

  handleNameChange(e){
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        name: e.target.value
      }
    });
  }

  handleAddUser(e){
    e.preventDefault();
    this.props.addUser({"name": this.state.user.name});
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        name: ""
      }
    });
  }

  render () {
    return (
      <div>
        <AddForm
          handleNameChange={this.handleNameChange}
          user={this.state.user}
          handleAddUser={this.handleAddUser}
        />
        <UserList
          users={this.props.users}
        />
      </div>
    )
  }
}

export default Dashboard;