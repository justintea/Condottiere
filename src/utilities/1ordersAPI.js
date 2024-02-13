import { getToken } from "./0usersService";
const token = getToken();
const baseURL = "/api/orders";

const headers = {
  "Content-type": "application/json",
  Authorization: `Bearer ${token}`,
};

//*CREATE ORDER---------------------------------------------
export async function createOrder(body) {
  const options = {
    method: 'POST',
    headers,
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

//*GET ALL ORDERS-------------------------------------------
export async function getOrders() {
  const options = {
    method: 'GET',
    headers,
  };

  const response = await fetch(baseURL, options);
  if (!response.ok) throw new Error("Network response (inbound) was not ok.");
}

















