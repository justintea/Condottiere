import { getToken } from "./0usersService";
const baseURL = "/api/orders";
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

//*CREATE ORDER---------------------------------------------
export async function createOneOrder(body) {
  const options = {
    method: 'POST',
    headers: createHeaders(),
    body: JSON.stringify(body),
  };

  const response = await fetch(baseURL, options);
  console.log('body: ', body);
  console.log('response: ', response);
  if (!response.ok) throw new Error("Network response (inbound) was not ok.");
  const json = await response.json();
  console.log(JSON.stringify(json));
  return json;
}

//*GET ONE USER'S ALL ORDERS-------------------------------------------
export async function getOrders() {
  const options = {
    method: 'GET',
    headers: createHeaders(),
  };

  const response = await fetch(baseURL, options);
  console.log('at getOrders in ordersAPI', response);
  if (!response.ok) throw new Error("Network response (inbound) was not ok.");
  const json = await response.json();
  console.log(JSON.stringify(json));
  return json;
}


//* SUPERUSER: GET ALL USERS' ALL ORDERS-------------------------------------------
//* use case: admin to export n analyse
export async function getAllOrders() {
  const options = {
    method: "GET",
    headers: createHeaders(),
  };

  const response = await fetch(baseURL, options);
  if (!response.ok) throw new Error("Network response was not ok.");
  return await response.json();
}


//* SUPERUSER: UPDATE ONE ORDER-------------------------------------------
//* use case: user made an error, calls admin to change
export async function updateOneOrder(body) {
  const id = body._id;       //! check this next time 
  console.log('body: ', body);


  const options = {
    method: "PUT",
    headers: createHeaders(),
    body: JSON.stringify(body),
  };

  const response = await fetch(`${baseURL}/${id}`, options);
  console.log('at updateOneOrder in OrdersAPI', response);

  if (!response.ok) throw new Error("Network response was not ok.");
  const json = await response.json();
  return json;
}


//* SUPERUSER: DELETE ONE ORDER-------------------------------------------
//* use case: admin clears db, or specific erroneous orders
export async function deleteOneOrder(body) {
    //! must be orderId, not user id. edit later
  const id = body.userId;       //! check this next time 
  console.log('body: ', body);
  console.log('id: ', id);

  const options = {
    method: "DELETE",
    headers: createHeaders(),
    body: JSON.stringify(body),
  };

  const response = await fetch(`${baseURL}/${id}`, options);
  console.log('at deleteOneOrder in OrdersAPI', response);

  if (!response.ok) throw new Error("Network response was not ok.");
  const json = await response.json();
  return json;
}




