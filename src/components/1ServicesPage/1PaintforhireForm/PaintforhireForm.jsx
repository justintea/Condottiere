import { Button, Form, Input, Select, Space } from "antd";
const { Option } = Select;
import { useState, useEffect } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";

export default function PaintforhireForm({ user, setUser }) {

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const [form] = Form.useForm();
  
  const onSizeComplexityChange = (value) => {
    switch (value) {
      case 'Small':
        form.setFieldsValue();
        break;
      case 'Normal':
        form.setFieldsValue();
        break;
      case 'Huge':
        form.setFieldsValue();
        break;
      
      default:
    }
  };

  const onUrgencyChange = (value) => {
    switch (value) {
      case 'Urgent':
        form.setFieldsValue();
        break;
      case 'Normal':
        form.setFieldsValue();
        break;
      case 'Relaxed':
        form.setFieldsValue();
        break;

      default:
    }
  };

  const Navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);

    //*state of prelogin Form is passed in 'values'
    //* write in manner that groups them in Array of arrays, by the 3 services 
    const paintsvcValuesArray =
    {
      'Painting Services': { ...values },
      'Masterclass Booking': { null: null },
      'Paint Table Booking': { null: null }
    };
  
    console.log('this is values: ', values);
    console.log('this is valuesArray: ', paintsvcValuesArray);
    console.log(user);

    //! Let's see if this works. regardless of user= or != null, use LocalStorage to handle formData

    if (user === null) {
      localStorage.setItem("data1Key", JSON.stringify(paintsvcValuesArray));
      console.log(localStorage);
      Navigate('/login');      //* head to loginPage to login
  
      //* postlogin 
      } else {
      localStorage.setItem("data1Key", JSON.stringify(paintsvcValuesArray));
      console.log(localStorage);
      Navigate('/user/cart');
      }

    //! Original method
    // //* if this is prelogin (User=null), store in LS. 
    // //* if postlogin (User!= null), store in CartData ?
    // if (user === null) {
    // localStorage.setItem("data1Key", JSON.stringify(paintsvcValuesArray));
    // console.log(localStorage);
    // //* below: store, transport, parse, access your Local Storage data like this
    // // const localStorageData = localStorage.getItem('data1Key');
    // // const parsedData = JSON.parse(localStorageData);
    // // const sizeofModelValue = parsedData?.sizeofModel;
    // // console.log(sizeofModelValue);
    // Navigate('/login');      //* pass transported data

    // //* postlogin 
    // } else {
    //   // console.log('data state', data1PaintSvcs);        //? Lesson: why does it not pass? because AntD overwrites. use 'values' state, instead
    //   console.log('this is valuesArray for postlogin users: ', paintsvcValuesArray);
      
    //   //? i think logic would be...: use a state. a global state. via Outlet state. and pass it around. 



    // }
    
      
  }

  //? save point-------------------------------------------
  // const onFinish = (values) => {
  //   console.log("Success:", values);
  //   // let data1svc = values;
  //   setData1PaintSvcs(values);
    
  //   //*state of prelogin Form is passed properly, in cases needed
  //   console.log(data1PaintSvcs);
  //   console.log(user);

  //   //? try to code here
  //   if (user === null) {
  //   //* final 
  //   localStorage.setItem("data1Key", JSON.stringify(values));
  //   console.log(localStorage);
  //   //* below: store, transport, parse, access your Local Storage data like this
  //   // const localStorageData = localStorage.getItem('data1Key');
  //   // const parsedData = JSON.parse(localStorageData);
  //   // const sizeofModelValue = parsedData?.sizeofModel;
  //   // console.log(sizeofModelValue);
  //   Navigate('/login');      //* pass transported data      
  //   //? try 1
  //   // navigate('/login', { state: { values } });
  //   // let preloginTransportedLocalStorage = { ...localStorage };              //* rewrite Localstorage data bc you cant just pass it
  //   //? try 2
  //   // let preloginTransportedLocalStorage = JSON.parse(JSON.stringify(localStorage));              //* rewrite Localstorage data bc you cant just pass it
  //   // Navigate('/login', { state: { preloginTransportedLocalStorage} });      //* pass transported data
  //   // console.log(preloginTransportedLocalStorage);
  //   //? try 3
  //   // Navigate('/login', { state: { values} });      //* pass transported data
  //   // console.log(values);
  //   // let preloginTransportedLocalStorage = { ...localStorage };              //* rewrite Localstorage data bc you cant just pass it
  //   } else {
  //     // console.log(); 
  //     console.log('data state', data1PaintSvcs);        //? why does it not pass? because AntD overwrites. use 'values' state, instead
  //     console.log('values', values);

  //   }
    
      
  // }
  




  //? -----------------------------------------------------

  // const onFinish = (values) => {
  //   console.log("Success:", values);
  // };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        name="numberOfModels"
        label="Number of models   "
        style={{ width: "85%" , margin: '0 0 5% 8.5%'}}
        rules={[
          {
            required: true,
            message: "Please input the number of models you require painting.",
          },
        ]}
      >
          <Input  />
        </Form.Item>
        
      <Form.Item
        name="sizeComplexity"
        label="Size & complexity"
        size='default'
        rules={[
          {
            required: true,
            message: "Please choose from: Small (28mm bases or smaller), Normal (>28mm), Huge (>70mm). Charges apply accordingly.",
          },
        ]}
      >
        <Select
          placeholder="Select a option"
          onChange={onSizeComplexityChange}
          allowClear
          style={{ width: "85%", margin: '0 0 1% 5%' }}
        >
          <Option value="Small">Small</Option>
          <Option value="Normal">Normal</Option>
          <Option value="Huge">Huge</Option>
        </Select>
      </Form.Item>
      
      <Form.Item
        name="urgencyRequired"
        label="Urgency"
        rules={[
          {
            required: true,
            message: "Please choose from: Urgent (1-3 days), Normal (1-3 weeks), Relaxed (1 month+). Charges apply accordingly.",
          },
        ]}
      >
        <Select
          placeholder="Select a option"
          onChange={onUrgencyChange}
          allowClear
          style={{ width: "85%", margin: '0 0 1% 5%' }}
        >
          <Option value="Urgent">Urgent</Option>
          <Option value="Normal">Normal</Option>
          <Option value="Relaxed">Relaxed</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="qualityRequired"
        label="Quality"
        rules={[
          {
            required: true,
            message: "Please choose from: Battle-ready and Artisan-ready.",
          },
        ]}
      >
        <Select
          placeholder="Select a option"
          onChange={onUrgencyChange}
          allowClear
          style={{ width: "85%", margin: '0 0 1% 5%' }}
        >
          <Option value="Battle-ready">Battle-ready</Option>
          <Option value="Artisan-ready">Artisan-ready</Option>
        </Select>
      </Form.Item>
        
        
      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" style={{ backgroundColor: "#01628f" , margin: "0  0 0 183%" }} htmlType="submit">
            Add to Cart
          </Button>
        </Space>
      </Form.Item>
    </Form>


    </>
  );
}

//? savept 1249

// export default function PaintforhireForm({ user, setUser }) {
//   const Navigate = useNavigate();

//   const onFinish = (values) => {
//     console.log("Success:", values);
    
//     //*state of prelogin Form is passed in 'values'
//     //* write in manner that groups them in Array of arrays, by the 3 services 
//     const paintsvcValuesArray =
//     {
//       'Painting Services': { ...values },
//       'Masterclass Booking': { null: null },
//       'Paint Table Booking': { null: null }
//     };
  
//     console.log('this is values: ', values);
//     console.log('this is valuesArray: ', paintsvcValuesArray);
//     console.log(user);

//     //* if this is prelogin (User=null), store in LS. 
//     //* if postlogin (User!= null), store in CartData ?
//     if (user === null) {
//     localStorage.setItem("data1Key", JSON.stringify(paintsvcValuesArray));
//     console.log(localStorage);
//     //* below: store, transport, parse, access your Local Storage data like this
//     // const localStorageData = localStorage.getItem('data1Key');
//     // const parsedData = JSON.parse(localStorageData);
//     // const sizeofModelValue = parsedData?.sizeofModel;
//     // console.log(sizeofModelValue);
//     Navigate('/login');      //* pass transported data

//     //* postlogin 
//     } else {
//       // console.log('data state', data1PaintSvcs);        //? Lesson: why does it not pass? because AntD overwrites. use 'values' state, instead
//       console.log('this is valuesArray for postlogin users: ', paintsvcValuesArray);
      
//       //? i think logic would be...: use a state. a global state. via Outlet state. and pass it around. 



//     }
    
      
//   }

//   //? save point-------------------------------------------
//   // const onFinish = (values) => {
//   //   console.log("Success:", values);
//   //   // let data1svc = values;
//   //   setData1PaintSvcs(values);
    
//   //   //*state of prelogin Form is passed properly, in cases needed
//   //   console.log(data1PaintSvcs);
//   //   console.log(user);

//   //   //? try to code here
//   //   if (user === null) {
//   //   //* final 
//   //   localStorage.setItem("data1Key", JSON.stringify(values));
//   //   console.log(localStorage);
//   //   //* below: store, transport, parse, access your Local Storage data like this
//   //   // const localStorageData = localStorage.getItem('data1Key');
//   //   // const parsedData = JSON.parse(localStorageData);
//   //   // const sizeofModelValue = parsedData?.sizeofModel;
//   //   // console.log(sizeofModelValue);
//   //   Navigate('/login');      //* pass transported data      
//   //   //? try 1
//   //   // navigate('/login', { state: { values } });
//   //   // let preloginTransportedLocalStorage = { ...localStorage };              //* rewrite Localstorage data bc you cant just pass it
//   //   //? try 2
//   //   // let preloginTransportedLocalStorage = JSON.parse(JSON.stringify(localStorage));              //* rewrite Localstorage data bc you cant just pass it
//   //   // Navigate('/login', { state: { preloginTransportedLocalStorage} });      //* pass transported data
//   //   // console.log(preloginTransportedLocalStorage);
//   //   //? try 3
//   //   // Navigate('/login', { state: { values} });      //* pass transported data
//   //   // console.log(values);
//   //   // let preloginTransportedLocalStorage = { ...localStorage };              //* rewrite Localstorage data bc you cant just pass it
//   //   } else {
//   //     // console.log(); 
//   //     console.log('data state', data1PaintSvcs);        //? why does it not pass? because AntD overwrites. use 'values' state, instead
//   //     console.log('values', values);

//   //   }
    
      
//   // }
  




//   //? -----------------------------------------------------

//   // const onFinish = (values) => {
//   //   console.log("Success:", values);
//   // };

//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };

//   return (
//     <>
//       <Form
//         name="basic"
//         labelCol={{
//           span: 11,
//         }}
//         wrapperCol={{
//           span: 15,
//         }}
//         style={{
//           maxWidth: 350,
//         }}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         autoComplete="off"
//       >
//         <Form.Item
//           label="Number of models"
//           name="Number of models"
//           rules={[
//             {
//               required: true,
//               message:
//                 "Please input the number of models you require painting.",
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Size & complexity"
//           name="Size & complexity"
//           rules={[
//             {
//               required: true,
//               message:
//                 "Please choose from: Small (28mm bases or smaller), Normal (>28mm), Huge (>70mm). Charges apply accordingly.",
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item
//           label="Urgency"
//           name="Urgency"
//           rules={[
//             {
//               required: true,
//               message:
//                 "Please choose from: Urgent (1-3 days), Normal (1-3 weeks), Relaxed (1 month+). Charges apply accordingly.",
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           wrapperCol={{
//             offset: 8,
//             span: 16,
//           }}
//         >
//           {/* <Link to="/login">
//               <Button
//                 style={{ backgroundColor: "#01628f" }}
//                 type="primary"
//                 htmlType="submit"
//               >
//                 Add to cart
//               </Button>
//           </Link> */}
          
//               <Button
//                 style={{ backgroundColor: "#01628f" }}
//                 type="primary"
//                 htmlType="submit"
//               >
//                 Add to cart
//               </Button>
          
//         </Form.Item>
//       </Form>


//     </>
//   );
// }
//?=============================


// const onFinish = (values) => {
//   console.log("Success:", values);
//   let data1svc = values;
//   setData1PaintSvcs(data1svc);
  
//   // console.log(data1PaintSvcs);
//   // console.log(user);

//   if (user === null) {
//   //* final 
//   localStorage.setItem("data1Key", JSON.stringify(values));
//   console.log(localStorage);
//   Navigate('/login');      //* pass transported data      
//   } else {
//     console.log('data state', data1PaintSvcs);        //? why does it not pass?
//     console.log('values', values);
//   }
// }
