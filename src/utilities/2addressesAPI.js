//? try 1
import { getToken } from "./0usersService";
const token = getToken();
const baseURL = "/api/addresses";

const headers = {
  "Content-type": "application/json",
  Authorization: `Bearer ${token}`,
};

//*CREATE ADDRESS---------------------------------------------
export async function createAddress(body, user) {

  console.log('user is: ', user);
  const options = {
    method: 'POST',
    headers,
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
    headers,
  };

  const response = await fetch(baseURL, options);
  console.log('at getOneAddress in AddressAPI', response);
  if (!response.ok) throw new Error("Network response (inbound) was not ok.");
  const json = await response.json();
  console.log(JSON.stringify(json));
  return json;
}

//*UPDATE YOUR ONE ADDRESS-------------------------------------
export async function updateOneAddress(body) {
  const id = body.userId;       //! check this next time 
  console.log('body: ', body);
  console.log('id: ', id);


  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
  };

  const response = await fetch(`${baseURL}/${id}`, options);
  console.log('at updateOneAddress in AddressAPI', response);

  if (!response.ok) throw new Error("Network response was not ok.");
  const json = await response.json();
  return json;
}

//* SUPERUSER: GET ALL ADDRESSES----------------------------------------
export async function getAllAddresses() {
  const options = {
    method: 'GET',
    headers,
  };

  const response = await fetch(baseURL, options);
  console.log('at getAllAddresses in AddressAPI', response);
  if (!response.ok) throw new Error("Network response (inbound) was not ok.");
  const json = await response.json();
  console.log(JSON.stringify(json));
  return json;
}





//? original implementation
// import { getToken } from "./0usersService";
// const BASE_URL = "/api/addresses";

// //*CREATE ADDRESS---------------------------------------------
// export async function createAddress(body) {

//   return sendRequest(BASE_URL + '/', 'POST', body);
// }



// //*UPDATE YOUR ONE ADDRESS-------------------------------------
// export async function updateOneAddress(userId, body) {
//   return sendRequest(`${BASE_URL}/${userId}`, 'PUT', body);
// }


// //*GET YOUR ONE ADDRESS----------------------------------------
// export async function getOneAddress(userId) {
//   return sendRequest(`${BASE_URL}/${userId}`, 'GET');
// }


// //* SUPERUSER: GET ALL ADDRESSES----------------------------------------
// export async function getAllAddresses() {
//   return sendRequest(BASE_URL, 'GET');
// }



// //* template function 
// export async function sendRequest(url, method = 'GET', payload = null) {

//   const options = { method };
//   if (payload) {
//     options.headers = { "Content-Type": "application/json" };
//     options.body = JSON.stringify(payload);
//   }

//   const token = getToken();
//   // console.log(token);

//   if (token) {
//     options.headers ||= {};
//     options.headers.Authorization = `Bearer ${token}`;
//   }

//   const res = await fetch(url, options);

//   if (res.ok) return res.json();
//   throw new Error("Bad Request");
// }



