import { Avatar, List, Divider, Button, Form } from 'antd';
import { useState } from "react";
import { createOrder } from '../../../utilities/1ordersService';
import { Outlet, useOutletContext } from 'react-router-dom';

// const onFinish = (values) => {
//   console.log('Success:', values);
  
// };
// const onFinishFailed = (errorInfo) => {
//   console.log('Failed:', errorInfo);
// };

export default function CartconfirmationPage({ user }) {

  const { orders, setOrders } = useOutletContext();


  const localStorageData = localStorage.getItem("data1Key");
  const parsedData = JSON.parse(localStorageData);

  //* need to transform
  const precartData = [];
  //* Function to transform my ParsedData into a form the initial AntD List would take
   for (const [key, value] of Object.entries(parsedData)) {
    if (!isObjectWithNull(value)) {
      precartData.push({
        title: key,
        details: value,
      });
    }
  }

  const cartData = precartData.map((item) => ({
    ...item,
    details: {
      ...item.details,
      dateTime: new Date().toLocaleString('en-SG', {
        timeZone: 'Asia/Singapore',
      }),
      itemPrice: `$${pricingCalculator(item)}`,
    },
  }));

  //* for transformation later, for rendering
  const renderedCartData = [];
//* a separation of 'proper DB data' from 'front-end rendered data'

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
      case 'classType':
        formattedKey = 'Class type';
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








  console.log(`this is parsedData: ${parsedData}`);
  console.log(`this is parsedData stringed: ${JSON.stringify(parsedData)}`);
  console.log(`this is cartData: ${cartData}`);
  console.log(`this is cartData details: ${cartData.details}`);
  console.log(`this is cartData stringed: ${JSON.stringify(cartData)}`);


  //* depending on service and service details, returns a price. Price is then fed above to add into Cart & Order arrays
  //* now just hard code
  function pricingCalculator(cartObject) {
    //? takes in array
    //? looks at what service is in 'title'
    //? looks into the 'details' object
    //? and given the service's pricing logic
    //? returns the price of service
    //! for loop
    //! look at first value of first key,
    //! if = 'Painting services', [nested logic ]
    //! if = 'Masterclass Booking', [nested logic ]
    //! if = 'Paint Table Booking', [nested logic ]

    // const prices = {
    // }

    return "20";
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

  //* Confirm your cart, and turn it into an Order
  //* Specifically this is for Order
  //? does Cart need to be a Db? or state will do?
  //* Cart has CRD functionality (or no need DB n use State to manage)
  //* Order has CR functionality 
  const onFinish = async (  ) => {
    // const onFinish = async ( cartData, user ) => {
    // console.log("Cart Submission Success:", valuesConfirmed);
    console.log('user is: ', user);
    console.log('orders: ', orders);
    try { 
      console.log("Cart Submission Success:", cartData);
      // await createOrder(cartData, user); 

      const newOrder = await createOrder(cartData, user); 

      setOrders([...orders, newOrder]);
    }
    catch (error) {
      window.alert('Something wrong: ', error);
      console.log(error);
    }

    
  };




  const onFinishFailed = (errorInfo) => {
    console.log("Cart Submission Failed:", errorInfo);
  };
  const handleDeleteCartItem = () => {
    console.log("Delete cart item requested");
  };

  return (
    <>
      <Divider orientation="left" style={{ margin: "0px" }}>
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
                    src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                  />
                }
                // * Renders the service title
                title={<h2 style={{ fontFamily: "Times New Roman" , margin: '0 0 0 2%'}}>{item.title}</h2>}
                //* Renders the description of each service's details

                description={
                  <div style={{ color: "black", margin: '0 0 0 2%'}}>
                    {Object.keys(renderedCartData[0].details).map((key, index) => (
                      <p key={index}>
                        {key}: <strong>{renderedCartData[0].details[key]}</strong>
                      </p>
                    ))}
                  </div>
                }
                //! end point of List meta
              />

              <Button onClick={handleDeleteCartItem}> Delete </Button>
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
          <Button
            style={{ backgroundColor: "#01628f", width: "180px" }}
            type="primary"
            htmlType="submit"
          >
            {" "}
            Proceed to Checkout{" "}
          </Button>
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
