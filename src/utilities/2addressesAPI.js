import { getToken } from "./0usersService";
const baseURL = "/api/addresses";
// const token = getToken();

// const headers = {
//   "Content-type": "application/json",
//   Authorization: `Bearer ${token}`,
// };

function createHeaders() {

  return {  "Content-type": "application/json",
    Authorization: `Bearer ${getToken()}`,
  }
}

//*CREATE ADDRESS---------------------------------------------
export async function createOneAddress(body, user) {

  console.log('user is: ', user);
  const options = {
    method: 'POST',
    headers: createHeaders(),
    body: JSON.stringify(body),
  };

  console.log('options: ', options);

  const response = await fetch(baseURL, options);

  console.log('body: ', body);
  console.log('body.userId: ', body.userId);
  console.log('response: ', response);
  
  if (!response.ok) throw new Error("Network response (inbound) was not ok: ", Error);
  const json = await response.json();
  console.log(JSON.stringify(json));
  return json;
}

//*GET YOUR ONE ADDRESS----------------------------------------
export async function getOneAddress() {
  const options = {
    method: 'GET',
    headers: createHeaders(),
  };

  const response = await fetch(baseURL, options);
  console.log('at getOneAddress in AddressAPI', response);
  if (!response.ok) throw new Error("Network response (inbound) was not ok.");
  const json = await response.json();
  console.log(JSON.stringify(json));
  return json;
}

//*UPDATE YOUR ONE ADDRESS-------------------------------------
//*SUPERUSER: UPDATE ONE ADDRESS-------------------------------------
export async function updateOneAddress(body) {
  const id = body.userId;       //! check this next time 
  console.log('body: ', body);
  console.log('id: ', id);


  const options = {
    method: "PUT",
    headers: createHeaders(),
    body: JSON.stringify(body),
  };

  const response = await fetch(`${baseURL}/${id}`, options);
  console.log('at updateOneAddress in AddressAPI', response);

  if (!response.ok) throw new Error("Network response was not ok.");
  const json = await response.json();
  return json;
}

//* SUPERUSER: GET ALL ADDRESSES----------------------------------------
export async function indexAllAddresses() {
  const options = {
    method: 'GET',
    headers: createHeaders(),
  };

  const response = await fetch(baseURL, options);
  console.log('at indexAllAddresses in AddressAPI', response);
  if (!response.ok) throw new Error("Network response (inbound) was not ok.");
  const json = await response.json();
  console.log(JSON.stringify(json));
  return json;
}

//*SUPERUSER: DELETE ONE ADDRESS-------------------------------------
export async function deleteOneAddress(body) {
  const id = body.userId;       //! check this next time 
  console.log('body: ', body);
  console.log('id: ', id);


  const options = {
    method: "DELETE",
    headers: createHeaders(),
    body: JSON.stringify(body),
  };

  const response = await fetch(`${baseURL}/${id}`, options);
  console.log('at deleteOneAddress in AddressAPI', response);

  if (!response.ok) throw new Error("Network response was not ok.");
  const json = await response.json();
  return json;
}