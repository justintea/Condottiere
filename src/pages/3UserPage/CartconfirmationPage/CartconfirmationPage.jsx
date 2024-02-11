import { Divider } from "antd";
import { Avatar, List } from 'antd';

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

  return (<>
    <Divider orientation="left" style={{margin: "0px" }}> <h2 style={{ fontFamily: 'Palatino Linotype'}}>Shopping Cart</h2> </Divider>

    {/* //? tester code - can render your localStorage prelogin form data  
    <p> to be rendered nicely</p>
    <div>
    parsedData = {JSON.stringify(parsedData, null, 2)}
    </div> */}
    
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
      </List.Item>
    )}
  />

    
      {/* //? -----------------------------------------------------------

    <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          img 
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  /> 

//? ----------------------------------------------------------- */}

  </>);
}
// return (<>
//   <h2>Shopping Cart </h2>
//   <p> to be rendered nicely</p>
//   {data1PaintSvcs.map((item, index) => (
//       <div key={index}>
//         {/* Render the properties of each item as needed */}
//         <p>{item.name}</p>
//         <p>{item.qty}</p>
//         {/* Add more properties or customize the rendering based on your data structure */}
//       </div>
//     ))}
// </>);