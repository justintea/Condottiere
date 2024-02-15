import * as ordersAPI from "./1ordersAPI";

//*CREATE ORDER---------------------------------------------
export async function createOrder(cartData, user) {
  // export async function createOrder(cartData) {
  console.log('cartData at ordersService.js createOrder: ', cartData);
  
  const body = {
    userId: user._id,
    dateTime: new Date(),         // probably need time, but next time
    items: cartData,

    // items: cartData.map((item) => ({
    //   title: item.title,
    //   details: item.details,
    //   // price: item.details.price,
    // })),
  };
  
  console.log('createOrder body: ',body);
  const newOrder = await ordersAPI.createOrder(body);

  return newOrder; 
}

//*GET ONE USER'S ALL ORDERS-------------------------------------------
export async function getOrders() {
  const data = await ordersAPI.getOrders();
  console.log(data);

  // const orders = formatDateFromFetch([...data]);

  return data;
}


//*GET ALL USERS' ALL ORDERS-------------------------------------------
//* use case: admin to export n analyse
export async function getAllOrders() {
  const data = await ordersAPI.getAllOrders();
  console.log(data);

  // const orders = formatDateFromFetch([...data]);

  return data;
}


//* UPDATE ONE USER' ORDER-------------------------------------------
//* use case: user made an error, calls admin to change
export async function updateOrder(updateData, user) {
  // export async function createOrder(cartData) {
  console.log('updateData at ordersService.js updateOrder: ', updateData);
  
  const body = {
    userId: user._id,
    dateTime: new Date(),         // probably need time, but next time
    items: updateData,
    _id: updateData._id,
    // items: cartData.map((item) => ({
    //   title: item.title,
    //   details: item.details,
    //   // price: item.details.price,
    // })),
  };
  console.log('updateOrder body: ',body);
  const updatedOrder = await ordersAPI.updateOrder(body);

  return updatedOrder; 
}

// export function formatDateFromFetch(logs) {
//   for (const log of logs) {
//     log.date = format(log.date, "d MMM yyyy");
//   }
//   return logs;
// }