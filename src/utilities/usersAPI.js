const BASE_URL = '/api/users';
import { getToken } from "./usersService";


//* signup function
export async function signUp(userData) {
  // console.log('usersAPI: does it sound here');

  return sendRequest(BASE_URL + '/', 'POST', userData);
}


//* login function
export async function logIn(credentials) {
  return sendRequest(BASE_URL + '/login', 'POST', credentials);
}

//* checktoken function
export async function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
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