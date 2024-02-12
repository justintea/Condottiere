import * as ordersAPI from "./1ordersAPI";

export async function createOrder(cartData) {
  console.log(cartData);
  const body = {
    id: cartData.id,
    userId: cartData.userId,
    dateTime: new Date(),         // probably need time, but next time
    items: cartData.map(item => ({
      title: item.title,
      details: item.details,
      price: item.details.price,
    })),
    // totalAmount: calculateTotalAmount(cartData),
  };
  
  const newOrder = await ordersAPI.createOrder(body);

  return newOrder; 
}

// function calculateTotalAmount(cartData) {
//   let totalAmount = 0;

//   for (const item of cartData) {
//     // Assuming each item in cartData has a 'details' object with a 'price' property
//     const price = parseFloat(item.details.price.replace('$', '')); // Extract numeric value from price string
//     totalAmount += price;
//   }

//   return totalAmount.toFixed(2); // Return the total amount rounded to two decimal places
// }


export async function getOrders() {
  const data = await ordersAPI.getOrders();
  console.log(data);
  const orders = formatDateFromFetch([...data]);

  return orders;
}

export function formatDateFromFetch(logs) {
  for (const log of logs) {
    log.date = format(log.date, "d MMM yyyy");
  }
  return logs;
}