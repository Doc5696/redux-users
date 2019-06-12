import * as types from './types';

export const CreateUser = user => ({
  type: types.CREATE_USER,
  payload: user
})

export const GetUsersRequest = users => {
  return {
    type: types.GET_USERS_REQUEST,
    payload: users
  };
};