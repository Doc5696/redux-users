import axios from "axios";
import {
  CreateUser,
  DeleteUser,
  GetUsersRequest,
  ChangeUser
} from "../actions/user.actions";

export const getUsers = users => dispatch => {
  return axios.get(`/users`, users).then(function(response) {
    dispatch(GetUsersRequest(response.data));
  });
};

export const addUser = user => async dispatch => {
  return axios.post(`/user`, user).then(function(response) {
    dispatch(CreateUser(response.data));
  });
};

export const editUser = user => async dispatch => {
  return axios
    .put(`/user`, {
      id: user.userId,
      name: user.user.newName
    })
    .then(function(response) {
      console.log(response.data);
      dispatch(ChangeUser(response.data));
    });
};

export const removeUser = user => async dispatch => {
  return axios.delete(`/user/${user.userId}`, user).then(function(response) {
    console.log(user);
    dispatch(DeleteUser(response.data));
  });
};
