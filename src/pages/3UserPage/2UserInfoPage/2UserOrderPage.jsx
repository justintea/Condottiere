import { Outlet, useOutletContext } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Avatar, Divider, List, Skeleton } from 'antd';
import { getToken } from "../../../utilities/0usersService";

export default function UserOrderPage() {
  const { orders, setOrders } = useOutletContext();
  const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);
  const [data, setData] = useState([]);

  console.log('this is the Orders state :', orders);
  
   //? savept
//    if (loading) {
//     return;
//   }
//  setLoading(true);
 
//  const token = getToken();

//  const headers = {
//   "Content-type": "application/json",
//   Authorization: `Bearer ${token}`,
// };

//  const options = {
//   method: "GET",
//   headers,
// };
// //  fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
//  await fetch('/api/orders', options)

//     .then((res) => res.json())
//     .then((body) => {
//       setData([...data, ...body.results]);
//       setLoading(false);
//     })
//     .catch(() => {
//       setLoading(false);
//     });
   
  // };


  // useEffect(() => {
  //   loadMoreData();
  // }, []);

  //? try 1
  // const renderSubDetails = (details) => {
  //   return Object.entries(details).map(([key, value]) => (
  //     <p key={key}>
  //       <strong>{key}:</strong> {value}
  //     </p>
  //   ));
  // };

  //? try 2
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
      <h2 style={{ fontFamily: "Palatino Linotype" , margin: '1% 0 0 5%' }}> Your Orders </h2>
      <p style={{ margin: '1% 0 0 5%'}}> You have made <strong>{ orders.length } purchases</strong> with us. Thank you for your continued support! </p>
      
      {/* //? start of experiment 2 */}
      {/* //? added something cool - reversed the order of Orders, now rendering the latest to the earliest */}
      <ul>
      {orders.slice(0).reverse().map((order) => (
        <li key={order._id} style={{ margin: '1.5% 0 0 4%'}}>
          <h3 style={{ fontFamily: "Times New Roman" }}>{order.items[0].title}</h3>
          {renderSubDetails(order.items[0].details)}

        </li>
      ))}
    </ul>

      {/* //? start of experiment 1 */}
      {/* <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={
          <Skeleton
            avatar
            paragraph={{
              rows: 1,
            }}
            active
          />
        }
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.email}>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description={item.email}
              />
              <div>Content</div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div> */}
      <br></br>
      <br></br>
    
    </>);
}




//? interesting potential
// {/* <div
//       id="scrollableDiv"
//       style={{
//         height: 400,
//         overflow: 'auto',
//         padding: '0 16px',
//         border: '1px solid rgba(140, 140, 140, 0.35)',
//       }}
//     >
//       <InfiniteScroll
//         dataLength={data.length}
//         next={loadMoreData}
//         hasMore={data.length < 50}
//         loader={
//           <Skeleton
//             avatar
//             paragraph={{
//               rows: 1,
//             }}
//             active
//           />
//         }
//         endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
//         scrollableTarget="scrollableDiv"
//       >
//         <List
//           dataSource={data}
//           renderItem={(orders) => (
//             <List.Item key={orders._id}>
//               <List.Item.Meta
//                 // avatar={<Avatar src={item.picture.large} />}
//                 //  this should be the Order number
//                 title={<span>{orders._id}</span>}
//                 // this should be details of the order 
//                 description={`Date: ${new Date(orders.dateTime).toLocaleString()}`}       
//               />
//                 {orders.items.map((item, index) => (
//           <div key={index}>
//             <strong>Service:</strong> {item.title} <br />
//             <strong>Details:</strong> {JSON.stringify(item.details)} <br />
//             <strong>Total Price:</strong> {item.details.itemPrice} <br />
//             <br />
//           </div>
//         ))}
//               {/* this should be the total price */}
//               <div>Content</div>              
//             </List.Item>
//           )}
//         />
//       </InfiniteScroll>
//       </div>
//       <br></br>
//       <br></br> */}