import axios from 'axios';
import { CreateUser } from "../actions/user.actions";
import { GetUsersRequest } from "../actions/user.actions";

export const getUsers = users => dispatch => {
  return axios.get(`/users`, users)
  .then(function(response) {
    dispatch(GetUsersRequest(response.data));
  });
};

export const addUser = user => async dispatch => {
  return axios.post(`/user`, user)
  .then(function(response) {
    dispatch(CreateUser(response.data));
  })
};