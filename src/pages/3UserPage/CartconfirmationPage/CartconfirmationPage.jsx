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
  const transformedData = [];
  //* Function to transform my ParsedData into a form the initial AntD List would take 
  for (const [key, value] of Object.entries(parsedData)) {
      if (!isObjectWithNull(value)) {
        transformedData.push({
          title: key,
          details: value
        });
    }
  }
  
  console.log(transformedData);

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
  
    
  return (<>
    <Divider orientation="left" style={{margin: "0px" }}> <h2 style={{ fontFamily: 'Palatino Linotype'}}>Shopping Cart</h2> </Divider>

     {/* //? tester code - can render your localStorage prelogin form data   */}
     <p> to be rendered nicely</p>
    <div>
    parsedData = {JSON.stringify(parsedData, null, 2)}
    </div>

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
       dataSource={transformedData}
       renderItem={(item, index) => (
         <List.Item>
           <List.Item.Meta
             avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
             
             // * Renders the service title and details properly
             title={<h2>{item.title}</h2>}
             description={JSON.stringify(item.details)}
   
           />
   
           <Button> Delete </Button>
         </List.Item>
       )}
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
