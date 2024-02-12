import { Divider } from "antd";
import { Avatar, List } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values) => {
  console.log('Success:', values);
  
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


export default function CartconfirmationPage({ user }) {
  
  const localStorageData = localStorage.getItem('data1Key');
  const parsedData = JSON.parse(localStorageData);

  //* need to transform 
  const cartData = [];
  //* Function to transform my ParsedData into a form the initial AntD List would take 
  for (const [key, value] of Object.entries(parsedData)) {
      if (!isObjectWithNull(value)) {
        cartData.push({
          title: key,
          details: value
        });
    }
  }
  
  console.log(`this is cartData: ${cartData}`);
  console.log(`this is cartData details: ${cartData.details}`);
  console.log(`this is cartData stringed: ${JSON.stringify(cartData)}`);
  // console.log(`this is cartData stringed parsed: ${JSON.parse(JSON.stringify(cartData))}`);
  
  console.log(`this is cartData details stringed: ${JSON.stringify(cartData.details)}`);
  // console.log(`this is cartData details stringed: ${JSON.stringify(cartData.details.value)}`);

  function pricingCalculator(service, values) {
  
    //? takes in service
    //? takes in a values detail object 
    //? returns the price of service 


}


//* Helper function to check if the embedded value is null 
function isObjectWithNull(obj) {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    Object.keys(obj).length === 1 &&
    obj.hasOwnProperty('null') &&
    obj.null === null
  );
}

const onFinish = (valuesConfirmed) => {
  console.log('Success:', valuesConfirmed);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
  
//* try 3
// const RenderKeyValuePairs = ({ cartData }) => (
//   <div>
//     {dataArray.map((dataObject, dataIndex) => (
//       <div key={dataIndex}>
//         {Object.entries(dataObject).map(([key, value]) => (
//           <div key={key}>
//             {Object.entries(value).map(([nestedKey, nestedValue]) => (
//               <p key={nestedKey}>
//                 {nestedKey}: {nestedValue}
//               </p>
//             ))}
//           </div>
//         ))}
//       </div>
//     ))}
//   </div>
// );
    
  return (<>
    <Divider orientation="left" style={{margin: "0px" }}> <h2 style={{ fontFamily: 'Palatino Linotype'}}>Shopping Cart</h2> </Divider>

     {/* //? tester code - can render your localStorage prelogin form data   */}
    <p> to be rendered nicely</p>
    <div>
      parsedData = {JSON.stringify(parsedData, null, 2)}
      <br /><br />
      cartData = { JSON.stringify(cartData)} 
    </div>
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
      dataSource={cartData}
      renderItem={(item, index) => (
      <List.Item>
          <List.Item.Meta 
            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
            
             // * Renders the service title and details properly
            title={<h2>{item.title}</h2>}
             //  * how to render description...
             // ? try 1
             //  description={JSON.stringify(item.details)}
             // description={JSON.parse(item.details).map((detail, detailIndex) => (
             //   <div key={detailIndex}>
             //     <h3>{detail.title}</h3>
             //     <ul>
             //       {Object.entries(detail.details).map(([key, value]) => (
             //         <li key={key}>
             //           <strong>{key}:</strong> {value}
             //         </li>
             //       ))}
             //     </ul>
             //   </div>
             // ))}

             //* try 2
             //  description={(item.details).map((detail) => {
             //   <ul>
             //          {Object.entries(detail.details).map(([key, value]) => (
             //           <li key={key}>
             //             <strong>{key}:</strong> {value}
             //           </li>
             //         ))}
             //       </ul>
            
             //* try 3
            //  {...<RenderKeyValuePairs dataArray={cartData} />}

             //* try 4 

            description={
              <div style={{ color: 'black'}}>
      {Object.keys(cartData[0].details).map((key, index) => (
        <p key={index}>
          {key}: {cartData[0].details[key]}
        </p>
      ))}
    </div>
            }
             //! end point of List meta
          />
  
          <Button> Delete </Button>
      </List.Item> )
      
      
      }
    />
  


    <Form.Item
      wrapperCol={{
        offset: 25,
        span: 16,
        }}
        style={{ display: 'flex', justifyContent: 'flex-end' }}
    >
      <Button style={{ backgroundColor: "#01628f", width: '180px'}} type="primary" htmlType="submit"> Proceed to Checkout </Button>
    </Form.Item>
  </Form>


  </>);
}




                            //     }) 
                            //   }
                            // />
            
               //* try 3
              
              //  <RenderKeyValuePairs dataArray={data} /> 
              //  />

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
