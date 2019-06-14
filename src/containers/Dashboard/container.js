import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addUser, getUsers, editUser, removeUser } from '../../store/services/users.service';
import Dashboard from './index'

const mapStateToProps = state => {
  return {
    users: state.users.users,
  };
};

const mapActionsToProps = dispatch => {
  return {
    getUsers: (data) => dispatch(getUsers(data)),
    addUser: (user) => dispatch(addUser(user)),
    removeUser: (user) => dispatch(removeUser(user)),
    editUser: (user) => dispatch(editUser(user)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapActionsToProps
  )(Dashboard)
);