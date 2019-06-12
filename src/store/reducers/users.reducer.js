import * as types from '../actions/types';

const initialState = {
  users: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_REQUEST: {
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };
    }
    case types.CREATE_USER: {
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
