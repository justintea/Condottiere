import { getToken } from "./0usersService";
const token = getToken();
const baseURL = "/api/orders";

const headers = {
  "Content-type": "application/json",
  Authorization: `Bearer ${token}`,
};

export async function createOrder(body) {
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  };

  const response = await fetch(baseURL, options);
  if (!response.ok) throw new Error("Network response (inbound) was not ok.");
}

// export async function getOrders() {
//   const options = {
//     method: 'GET',
//     headers,
//   };

//   const response = await fetch(baseURL, options);
//   if (!response.ok) throw new Error("Network response (inbound) was not ok.");
// }

















