import * as userpreferencesAPI from "./userpreferencesAPI";
import { getToken } from "./usersService";

export function getUserPreference() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

//*==================================================================

//* create birthday function
export async function createBirthday(inputData) {
  const token = await userpreferencesAPI.createBirthday(inputData);

  localStorage.setItem('token', token);

  return getUserPreference();
}


//* getOne birthday function
export async function getOneBirthday(userId) {
  const token = await userpreferencesAPI.getOneBirthday(userId);

  localStorage.setItem('token', token);

  return getUserPreference();
}


//* update birthday function
export async function updateBirthday(updateData) {
  const token = await userpreferencesAPI.updateBirthday(updateData);

  localStorage.setItem('token', token);

  return getUserPreference();
}


// export async function indexBirthday() {
//   const token = await userpreferencesAPI.indexBirthday();

//   localStorage.setItem('token', token);

//   return getUser();
// }