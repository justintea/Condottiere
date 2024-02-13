import * as ordersAPI from "./1ordersAPI";

export async function createOrder(cartData, user) {
  // export async function createOrder(cartData) {
  console.log('cartData at ordersService.js createOrder: ', cartData);
  
  const body = {
    //* ========test=======
    id: user.id,
    userId: user.userId,
    //*====================
    dateTime: new Date(),         // probably need time, but next time
    items: cartData.map((item) => ({
      title: item.title,
      details: item.details,
      // price: item.details.price,
    })),
  };
  
  console.log('createOrder body: ',body);
  const newOrder = await ordersAPI.createOrder(body);

  return newOrder; 
}

export async function getOrders() {
  const data = await ordersAPI.getOrders();
  console.log(data);

  // const orders = formatDateFromFetch([...data]);

  return data;
}

// export function formatDateFromFetch(logs) {
//   for (const log of logs) {
//     log.date = format(log.date, "d MMM yyyy");
//   }
//   return logs;
// }