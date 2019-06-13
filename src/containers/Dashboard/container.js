import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addUser } from '../../store/services/users.service';
import { getUsers } from '../../store/services/users.service';
import Dashboard from './index'

const mapStateToProps = state => {
  return {
    users: state.users.users,
  };
};

const mapActionsToProps = dispatch => {
  return {
    getUsers: (data) => dispatch(getUsers(data)),
    addUser: (user) => dispatch(addUser(user))    
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapActionsToProps
  )(Dashboard)
);