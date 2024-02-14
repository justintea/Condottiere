import { Outlet, useOutletContext, useNavigate } from "react-router-dom";
import { Badge, Descriptions, Button, Flex } from 'antd';
// import './3UserAddressPage.css';

export default function UserAddressPage({ user }) {

  const { address } = useOutletContext();
  console.log(address);

  //? needs to have a form
      //? onfinish - does the post request 
  //? and a place it renders this

  const items = [
    {
      key: '1',
      label: 'Full name',
      children: 'Anthony Stark',
    },
    {
      key: '2',
      label: 'Phone Number',
      children: '+1 999 9999',
    },
    {
      key: '3',
      label: 'Country',
      // span: 2,
      children: 'United States',
    },
    
    {
      key: '4',
      label: 'Postal Code',
      children: 'NY 10166',
    },
    {
      key: '5',
      label: 'Street Name',
      children: 'Stark Tower, 200 Park Avenue, Manhattan',
    },
    {
      key: '6',
      label: 'Apartment Unit Number',
      children: '#111-01',
    },
    {
      key: '7',
      label: 'Account status',
      span: 3,
      children: <Badge status="success" text="Active" />,
    },
    // {
    //   key: '10',
    //   label: 'Config Info',
    //   children: (
    //     <>
    //       Data disk type: MongoDB
    //       <br />
    //       Database version: 3.4
    //       <br />
    //       Package: dds.mongo.mid
    //       <br />
    //       Storage space: 10 GB
    //       <br />
    //       Replication factor: 3
    //       <br />
    //       Region: East China 1
    //       <br />
    //     </>
    //   ),
    // },
  ];
  
  //* navigate function 
  const Navigate = useNavigate(); 
  function handleAdd() {
    Navigate('/user/addaddress');
    
  }
  function handleEdit() {
    Navigate('/user/editaddress');
    
  }


  return (
    <>
      <h2 style={{ fontFamily: "Palatino Linotype" }}> Address & Contact details </h2>
      <Flex gap="small" wrap="wrap" justify="flex-end">
        <Button className='editButton' onClick={handleAdd} type="text" style={{ width: '3%', margin: '0 2% 0.5% 0' }} > Add </Button>
        <Button className='editButton' onClick={handleEdit} type="text" style={{ width: '3%', margin: '0 1% 0.5% 0' }} > Edit </Button>

      </Flex>
      <Descriptions layout="vertical" bordered items={items} />
      <br></br>
      <br></br>
    </>);
}


// const items = [
//   {
//     key: '1',
//     label: 'Full name',
//     children: 'Anthony Stark',
//   },
//   {
//     key: '2',
//     label: 'Phone Number',
//     children: '+1 999 9999',
//   },
//   {
//     key: '3',
//     label: 'Country',
//     // span: 2,
//     children: 'United States',
//   },
  
//   {
//     key: '4',
//     label: 'Postal Code',
//     children: 'NY 10166',
//   },
//   {
//     key: '5',
//     label: 'Street Name',
//     children: 'Stark Tower, 200 Park Avenue, Manhattan',
//   },
//   {
//     key: '6',
//     label: 'Apartment Unit Number',
//     children: '#111-01',
//   },
//   {
//     key: '7',
//     label: 'Account status',
//     span: 3,
//     children: <Badge status="success" text="Active" />,
//   },
//   // {
//   //   key: '10',
//   //   label: 'Config Info',
//   //   children: (
//   //     <>
//   //       Data disk type: MongoDB
//   //       <br />
//   //       Database version: 3.4
//   //       <br />
//   //       Package: dds.mongo.mid
//   //       <br />
//   //       Storage space: 10 GB
//   //       <br />
//   //       Replication factor: 3
//   //       <br />
//   //       Region: East China 1
//   //       <br />
//   //     </>
//   //   ),
//   // },
// ];