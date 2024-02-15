const BASE_URL = '/api/users';
import { getToken } from "./0usersService";


//* SIGNUP FUNCTION
export async function signUp(userData) {
  // console.log('usersAPI: does it sound here');

  return sendRequest(BASE_URL + '/', 'POST', userData);
}


//* LOGIN FUNCTION
export async function logIn(credentials) {
  return sendRequest(BASE_URL + '/login', 'POST', credentials);
}


//* CHECKTOKEN FUNCTION
export async function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}


//* SUPERUSER: GET ALL USERS-------------------------------------------
//* use case: without using a db, admin can see all users & details
export async function indexAllUsers() {
  return sendRequest(BASE_URL + '/', 'GET', );
}


//* SUPERUSER: UPDATE ONE USER-------------------------------------------
//* use case: without using a db, admin can update User's username, email
//! not sure if this works. test later
export async function updateOneUser( { body, userId } ) {
  return sendRequest(BASE_URL + '/', 'PUT', ( body, userId) );
}


//* SUPERUSER: DELETE ONE USER-------------------------------------------
//* use case: without using a db, admin can delete inactive/dead accounts
export async function deleteOneUser( userId ) {
  return sendRequest(BASE_URL + '/', 'DELETE', userId );
}



//* template function 
export async function sendRequest(url, method = 'GET', payload = null) {

  const options = { method };
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);

    // console.log(options.headers);
    // console.log(options.body);
  }

  const token = getToken();
  // console.log(token);

  if (token) {
    options.headers ||= {};
    options.headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, options);

  if (res.ok) return res.json();
  throw new Error("Bad Request");
}