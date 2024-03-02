import { Avatar, List, Divider, Button, Form } from 'antd';
import { useState } from "react";
import { createOneOrder } from '../../../utilities/1ordersService';
import { Outlet, useOutletContext, useNavigate } from 'react-router-dom';
import pricingCalculator from './pricingCalculator';
  
export default function CartconfirmationPage({ user }) {

  const { orders, setOrders, cart, setCart } = useOutletContext();
  const Navigate = useNavigate();
  
  const localStorageData = localStorage.getItem("data1Key");
  const parsedData = JSON.parse(localStorageData);

  //* need to transform my localStorage data in a few ways
  //* Flow: Ant D 'values' -> valuesarray -> localStorage -> parsedData -> precartData -> cartData (goes to Orders & the DB) -> renderedCartData (used for rendering on this page)
  //* Note: i wrote 'valuesarray' for future use, for the cart to hold data of not just 1 service
  const precartData = [];
  //* Function to transform my ParsedData into a form the initial AntD List would take
  //* if a real KVP, then isObjectWithNull = false, then condition = true, then push that KVP into 'precartData' 
   for (const [key, value] of Object.entries(parsedData)) {
    if (!isObjectWithNull(value)) {
      precartData.push({
        title: key,
        details: value,
      });
    }
  }

  //* Helper function to check if the embedded value is null. this helps with the precartData transformation (reject those that are 'null')
  function isObjectWithNull(obj) {
    return (
      typeof obj === "object" &&
      obj !== null &&
      Object.keys(obj).length === 1 &&
      obj.hasOwnProperty("null") &&
      obj.null === null
    );
  }


  //* as i recreate the array, I will add in Date & Price, at the cart-level, at the 'details' level for easy access & rendering
  let cartData = precartData.map((item) => ({
    ...item,
    details: {
      ...item.details,
      dateTime: new Date().toLocaleString('en-SG', {
        timeZone: 'Asia/Singapore',
      }),
      itemPrice: `$${pricingCalculator(item)}`,
    },
  }));

//* For rendering
  let renderedCartData = [];
//* a separation of 'proper DB data' from 'front-end rendered data'
//* mapping the keys for more user-friendly view
function mapNewKeys(details) {
  const formattedDetails = {};

  for (const [key, value] of Object.entries(details)) {
    let formattedKey = key;
    let formattedValue = value;

    switch (key) {
      case 'numberOfModels':
        formattedKey = 'Number of models';
        break;
      case 'sizeComplexity':
        formattedKey = 'Size & complexity';
        break;
      case 'urgencyRequired':
        formattedKey = 'Urgency';
        break;
      case 'qualityRequired':
        formattedKey = 'Quality';
        break;
      case 'classType':
        formattedKey = 'Class type';
        break;
      case 'primingRequired':
        formattedKey = 'Priming';
        break;
      case 'dateTime':
        formattedKey = 'Date';
        break;
      case 'itemPrice':
        formattedKey = 'Item price';
        break;
      default:
    }

    formattedDetails[formattedKey] = formattedValue;
  }

  return formattedDetails;
}

cartData.forEach((item) => {
  const renderedItem = {
    title: item.title,
    details: mapNewKeys(item.details),
  };

  renderedCartData.push(renderedItem);
  console.log('this is renderedCartData: ', renderedCartData);
});

//?this somehow makes the above code run recursively. error message: setState in useEffect. Must be some AntD thing. 
// setCart(renderedCartData); 
  
//* my useful test code
  // console.log(`this is parsedData: ${parsedData}`);
  console.log(`this is parsedData stringed: ${JSON.stringify(parsedData)}`);
  console.log(`this is cartData: ${cartData}`);
  console.log(`this is cartData stringed: ${JSON.stringify(cartData)}`);


  //* depending on service and service details, returns a price. Price is then fed above to add into Cart & Order arrays
//! pricingCalculator 


  //* Confirm your cart, and turn it into an Order
  //* Specifically this is for Order
  //* Order has CR functionality 
  //* Cart has CRD functionality (for implementation speed, I used localStorage, over State or DB )
  const onFinish = async () => {
    // const onFinish = async ( cartData, user ) => {
    // console.log("Cart Submission Success:", valuesConfirmed);
    console.log('user is: ', user);
    console.log('orders: ', orders);
    
    try { 
      console.log("Cart Submission Success:", cartData);
      // await createOrder(cartData, user); 

      const newOrder = await createOneOrder(cartData, user); 

      setOrders([...orders, newOrder]);
      
      localStorage.setItem('data1Key', JSON.stringify(emptyCart));

      Navigate('/user/orders');

    }
    catch (error) {
      window.alert('Something is wrong ', error);
      console.log(error);
    }

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Cart Submission Failed:", errorInfo);
  };
  //* Delete Button empties the cart.
  //* emptyCart is used above in Checkout Button too, so the Cart is emptied with a successful Order
  //* but my handleDeleteCartItem function is a bit faulty, the delete button has a State issue. should have used State, but needs research on AntD implementation 
  const emptyCart = {
    'Painting Services': { null: null },
    'Masterclass Booking': { null: null },
    'Paint Table Booking': { null: null }
  }
  
  const handleDeleteCartItem = () => {
    console.log("Delete cart item requested");

    localStorage.setItem('data1Key', JSON.stringify(emptyCart));
    cartData = []; 
    renderedCartData = [{ title: 'Your cart is empty.' }];
    // setCart(renderedCartData);         //? need to see how to implement this in Ant D.
    console.log('cartdata: ', cartData);
    console.log('renderedCartData ', renderedCartData);
  };

  return (
    <>
      <Divider orientation="left" style={{ margin: "0 0 0 0" }}>
        {" "}
        <h2 style={{ fontFamily: "Palatino Linotype" }}>Shopping Cart</h2>{" "}
      </Divider>

      {/* //? tester code - can render your localStorage prelogin form data   */}
      {/* <p> Test render of prelogin form data </p>
      <div>
        parsedData = {JSON.stringify(parsedData, null, 2)}
        <br />
        <br />
        cartData = {JSON.stringify(cartData)}
      </div> */}
      {/* //? end of tester code   */}

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <List
          itemLayout="horizontal"
          dataSource={renderedCartData}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${8}`}
                    style={{ margin: '0 0 0 170%' }} />
                }
                // * Renders the service title
                title={<h2 style={{ fontFamily: "Times New Roman" , margin: '0 0 0 11%'}}>{item.title}</h2>}
                //* Renders the description of each service's details

                description={
                  <div style={{ color: "black", margin: '0 0 0 11%'}}>
                    {Object.keys(renderedCartData[0].details).map((key, index) => (
                      <p key={index}>
                        {key}: <strong>{renderedCartData[0].details[key]}</strong>
                      </p>
                    ))}
                  </div>
                }
                //! end point of List meta
              />

              {/* does not work yet, but will incorporate in the future */}
              <Button onClick={handleDeleteCartItem} style={{margin: '0 0 32% 0'}}> Delete </Button>
            </List.Item>
          )}
        />

        <Form.Item
          wrapperCol={{
            offset: 25,
            span: 16,
          }}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          {/* clunky way of making the Checkout button disappear if no data. should have used State, but needs research on AntD implementation */}
          {renderedCartData.length > 0 && (                 
            <Button
              style={{ backgroundColor: "#01628f", width: "180px" }}
              type="primary"
              htmlType="submit"
            >
              {" "}
              Proceed to Checkout{" "}
            </Button>
          )}
        </Form.Item>
      </Form>
    </>
  );
}


//? 11/2 savept
// export default function CartconfirmationPage({ user }) {
  
//   const localStorageData = localStorage.getItem('data1Key');
//   const parsedData = JSON.parse(localStorageData);

//   //* need to transform 
//   const transformedData = [];
//   //* Function to transform my ParsedData into a form the initial AntD List would take 
//   for (const [key, value] of Object.entries(parsedData)) {
//       if (!isObjectWithNull(value)) {
//         transformedData.push({
//           title: key,
//           details: value
//         });
//     }
//   }
  
//   console.log(transformedData);

// //* Helper function to check if the embedded value is null 
// function isObjectWithNull(obj) {
//   return (
//     typeof obj === 'object' &&
//     obj !== null &&
//     Object.keys(obj).length === 1 &&
//     obj.hasOwnProperty('null') &&
//     obj.null === null
//   );
// }

//   return (<>
//     <Divider orientation="left" style={{margin: "0px" }}> <h2 style={{ fontFamily: 'Palatino Linotype'}}>Shopping Cart</h2> </Divider>

//     {/* //? tester code - can render your localStorage prelogin form data   */}
//     <p> to be rendered nicely</p>
//     <div>
//     parsedData = {JSON.stringify(parsedData, null, 2)}
//     </div>
    
//     <List
//     itemLayout="horizontal"
//     dataSource={transformedData}
//     renderItem={(item, index) => (
//       <List.Item>
//         <List.Item.Meta
//           avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
          
//           // * Renders the service title and details properly
//           title={<h2>{item.title}</h2>}
//           description={JSON.stringify(item.details)}

//         />
//       </List.Item>
//     )}
//   />

//   </>);
// }
