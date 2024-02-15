import * as usersAPI from "./0usersAPI";


//* SIGNUP FUNCTION
export async function signUp(userData) {
  // console.log('usersSVC: does it sound here');
  const token = await usersAPI.signUp(userData);
  // console.log('userSVC - await userAPIsignup: ', token);
  // console.log('usersSVC: does it sound here after');
  localStorage.setItem("token", token);

  return getUser();
}

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

export function getToken() {
  const token = localStorage.getItem("token");
  // console.log(token);
  if (!token) return null;

  // if have token, obtain the payload of the token
  const payload = JSON.parse(atob(token.split(".")[1]));
  // console.log(payload);

  // A JWT's exp is expressed in seconds, not milliseconds, so convert
  if (payload.exp < Date.now() / 1000) {
    // Token has expired - remove it from localStorage
    localStorage.removeItem("token");
    return null;
  }
  return token;
}

export function logOut() {
  localStorage.removeItem("token");
}


//* LOGIN FUNCTION
export async function logIn(credentials) {
  // goes to a GET request for 1 ID
  // so that is in the users-api
  const token = await usersAPI.logIn(credentials);
  localStorage.setItem("token", token);
  return getUser();
}

export function checkToken() {
  return usersAPI.checkToken().then((dateStr) => new Date(dateStr));
}


//* SUPERUSER: GET ALL USERS-------------------------------------------
//* use case: without using a db, admin can see all users & details
export async function indexAllUsers() {
  const data = await usersAPI.indexAllUsers();
  console.log(data);

  return data;
}


//* SUPERUSER: UPDATE ONE USER-------------------------------------------
//* use case: without using a db, admin can update User's username, email
export async function updateOneUser(userData, user) {

  const body = {
    userId: user._id,
    username: userData.username,
    email: userData.email,
    password: userData.password,
  };

  console.log('userId in usersService: ', body.userId); 
  console.log('entire Body in usersService: ', body);
  
  const updatedOneUser = await usersAPI.updateOneUser(body);
  return updatedOneUser;
}


//* SUPERUSER: DELETE ONE USER-------------------------------------------
//* use case: without using a db, admin can delete inactive/dead accounts
export async function deleteOneUser(id) {
  const deletedOneUser = await usersAPI.deleteOneUser(id);

  return deletedOneUser;
}