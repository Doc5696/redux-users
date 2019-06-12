import { CreateUser } from "../actions/user.actions";
import { GetUsersRequest } from "../actions/user.actions";

const baseUrl = "http://localhost:8081/api";


export const getUsers = users => async dispatch => {
  try {
    const users = await fetch(`${baseUrl}/users`, {
      method: "GET",
    })
    let usersList = await Promise.resolve(users.json())
    console.log(usersList)
    dispatch(GetUsersRequest(usersList))
  } catch(err) {
    throw new Error(err)
  }
};


export const addUser = user => async dispatch => {
  try {
    const response = await fetch(`${baseUrl}/user`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(user)
    })
    let data = await Promise.resolve(response.json())
    console.log(data)
    dispatch(CreateUser(data))
  } catch (err) {
    throw new Error(err)
  }
};