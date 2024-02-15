//? links
// /user/admin_userorders_viewall
//  / user / admin_userorders_updateone
//  /user/admin_userorders_deleteone
import { Outlet, useOutletContext } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { getAllOrders } from "../../../../utilities/1ordersService";

export default function AdminViewAllOrdersPage() {
  const { orders, setOrders } = useOutletContext();
  console.log('test test - this is orders: ', orders);

  //? probably...
  //? 1. get the data (not 'orders')
  //? 2. via fetch async await (not 'orders')
  //? 3. then put it through your 'rendering engine'
  //? Note: the (Get)All functions probably need more security.....

  
  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const allOrders = await getAllOrders();
        console.log('allOrders from api call: ', allOrders);
        setOrders(allOrders);
      } catch (error) {
        console.error('Error fetching allOrders:', error);
      }
    };

    fetchAllOrders();
  }, []);


  console.log('this is the Orders state after API call: ', orders);


  const renderSubDetails = (details) => {
    return Object.entries(details).map(([key, value]) => {
      let formattedKey = key;
      let formattedValue = value;
  
      // Format keys
      switch (key) {
        case '_id':
          formattedKey = 'Order ID';
          formattedValue = value.slice(-10); // Only the last 5 characters of '_id'
          break;
        case 'numberOfModels':
          formattedKey = 'Number of models';
          break;
        case 'sizeComplexity':
          formattedKey = 'Size & complexity';
          break;
        case 'urgencyRequired':
          formattedKey = 'Urgency';
          break;
        case 'classType':
          formattedKey = 'Class type';
          break;
        case 'dateTime':
          formattedKey = 'Date';
          formattedValue = value.toLocaleString('en-SG', {
            timeZone: 'Asia/Singapore',
          });
          break;
        case 'itemPrice':
          formattedKey = 'Item price';
          break;
        default:
      }
  
      return (
        <p key={formattedKey} style={{ fontFamily: "Times New Roman" }}>
          <strong>{formattedKey}:</strong> {formattedValue}
        </p>
      );
    });
  };
  
  
  return (
    <>
      <h2 style={{ fontFamily: "Palatino Linotype" , margin: '1% 0 0 5%' }}> View All Orders </h2>
      <p style={{ margin: '1% 0 0 5%'}}> Users have made <strong>{ orders.length } transactions </strong> with us. </p>
      
      <ul>
      {orders.slice(0).reverse().map((order) => (
        <li key={order._id} style={{ margin: '2.5% 0 0 4%'}}>
          <h3 style={{ fontFamily: "Times New Roman" }}>{order.items[0].title}</h3>
          {renderSubDetails(order.items[0].details)}

        </li>
      ))}
    </ul>

      <br></br>
      <br></br>
    
    </>);
}