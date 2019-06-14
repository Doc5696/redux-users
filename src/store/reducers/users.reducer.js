import * as types from "../actions/types";

const initialState = {
  users: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_REQUEST: {
      return {
        ...state,
        users: [...state.users, ...action.payload]
      };
    }
    case types.CREATE_USER: {
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    }
    case types.CHANGE_USER: {
      let newUsers = [...state.users];
      newUsers[newUsers.findIndex(user => user._id === action.payload._id)] =
        action.payload;
      return {
        ...state,
        users: newUsers
      };
    }
    case types.DELETE_USER: {
      return {
        ...state,
        users: [...state.users.filter(user => user._id !== action.payload.id)]
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
