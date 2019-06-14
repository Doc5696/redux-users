import * as types from './types';

export const GetUsersRequest = users => {
  return {
    type: types.GET_USERS_REQUEST,
    payload: users
  };
};

export const CreateUser = user => ({
  type: types.CREATE_USER,
  payload: user
})

export const ChangeUser = user => ({
  type: types.CHANGE_USER,
  payload: user
})

export const DeleteUser = user => ({
  type: types.DELETE_USER,
  payload: user
})