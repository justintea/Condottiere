import { Collapse } from 'antd';
import { Divider } from "antd";
import { Table } from 'antd';

const paintsvcpriceColumns = [
  {
    title: 'Size & Complexity',
    dataIndex: 'SizeComplexity',
  },
  {
    title: 'Urgency',
    dataIndex: 'Urgency',
  },
  {
    title: 'Price per model',
    dataIndex: 'Pricepermodel',
  },
];

const paintsvcpriceData = [
  {
    key: '1',
    SizeComplexity: 'Small',
    Urgency: 'Relaxed',
    Pricepermodel: '$18',
  },
  {
    key: '2',
    SizeComplexity: 'Normal',
    Urgency: 'Relaxed',
    Pricepermodel: '$20',
  },
  {
    key: '3',
    SizeComplexity: 'Huge',
    Urgency: 'Relaxed',
    Pricepermodel: '$70',
  },
  {
    key: '4',
    SizeComplexity: 'Small',
    Urgency: 'Normal',
    Pricepermodel: '$20',
  },
  {
    key: '5',
    SizeComplexity: 'Normal',
    Urgency: 'Normal',
    Pricepermodel: '$25',
  },
  {
    key: '6',
    SizeComplexity: 'Huge',
    Urgency: 'Normal',
    Pricepermodel: '$90',
  },
  {
    key: '7',
    SizeComplexity: 'Small',
    Urgency: 'Urgent',
    Pricepermodel: '$30',
  },
  {
    key: '8',
    SizeComplexity: 'Normal',
    Urgency: 'Urgent',
    Pricepermodel: '$45',
  },
  {
    key: '9',
    SizeComplexity: 'Huge',
    Urgency: 'Urgent',
    Pricepermodel: '$120',
  },
];

const paintsvcSizencomColumns = [
  {
    title: 'Size & Complexity',
    dataIndex: 'SizeComplexity',
  },
  {
    title: 'Description',
    dataIndex: 'Description',
  },
];

const paintsvcSizencomData = [
  {
    key: '1',
    SizeComplexity: 'Small',
    Description: 'Refers to models with 28mm base and smaller. Examples: Craftworld Farseers, Imperial Eversor Assasins, Tyranids Termagaunts.',
  },
  {
    key: '2',
    SizeComplexity: 'Normal',
    Description: 'Refers to models with base or end-to-end span smaller than 70mm. Examples: Ultramarines terminators, Orks Kommandos & Stormboyz.',
  },
  {
    key: '3',
    SizeComplexity: 'Huge',
    Description: 'Refers to models with base or end-to-end span larger than 70mm. Examples: Drukhari Venoms, Custodes Vertus Praetors',
  },
];

const paintsvcUrgencyColumns = [
  {
    title: 'Urgency',
    dataIndex: 'Urgency',
  },
  {
    title: 'Description',
    dataIndex: 'Description',
  },
];

const paintsvcUrgencyData = [
  {
    key: '1',
    Urgency: 'Urgent',
    Description: 'Our painters will aim to complete the painting within 1-3 days.',
  },
  {
    key: '2',
    Urgency: 'Normal',
    Description: 'Our painters will aim to complete the painting within 1-3 weeks.',
  },
  {
    key: '3',
    Urgency: 'Relaxed',
    Description: 'Our painters will aim to complete the painting within approximately 1 month.',
  },

];

const classpriceColumns = [
  {
    title: 'Class type',
    dataIndex: 'Classtype',
  },
  {
    title: 'Description',
    dataIndex: 'Description',
  },
  {
    title: 'Price',
    dataIndex: 'Price',
  },
]; 

const classpriceData = [
  {
    key: '1',
    Classtype: 'Hired tutor',
    Description: 'A once-off, 2-hour, one-on-one dedicated lesson with our top painter-teachers',
    Price: '$80',
  },
  {
    key: '2',
    Classtype: 'Squire-r-us',
    Description: '3 x 1-hour one-on-one dedicated lessons with our regular painter-tutors, teaching you painting fundamentals progressively.',
    Price: '$100',
  },
  {
    key: '3',
    Classtype: 'Paint-knights-on-a-quest',
    Description: '5 x 1-hour one-on-one dedicated lessons, over 2 months, with painting foundations and a capstone paint project.',
    Price: '$150',
  },
  {
    key: '4',
    Classtype: 'Paint-Champion',
    Description: '15 x 1-hour one-on-one dedicated lessons, over 6 months, bringing from zero to hero! Painters will be able to learn various paint techniques like highlighting, drybrushing and airguns, paint with speed, and for competitions.',
    Price: '$400',
  },
];



export default function FAQPage() {

//   const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;

const items = [
  {
    key: '1',
    label: 'What is the pricing for Condottierre painting services?',
    answer: <p>The pricing for Condottierre painting services is as follows: 
    <br />
    <Divider>Painting services pricing</Divider>
      <Table columns={paintsvcpriceColumns} dataSource={paintsvcpriceData} pagination={false} size="middle" />
      <br />
      <Divider>Size & complexity guidelines</Divider>
      <Table columns={paintsvcSizencomColumns} dataSource={paintsvcSizencomData} pagination={false} size="middle" />
      <br />
      <Divider>Urgency </Divider>
      <Table columns={paintsvcUrgencyColumns} dataSource={paintsvcUrgencyData} pagination={false} size="middle" />
      <br />
    </p>
 
  },
  {
    key: '2',
    label: 'What is the pricing for Condottierre masterclasses?',
    answer: <p>The pricing for Condottierre masterclasses is as follows: 
    <br />
    <Divider>Masterclass pricing</Divider>
    <Table columns={classpriceColumns} dataSource={classpriceData} pagination={false} size="middle" />
    </p>
 
  },
  {
    key: '3',
    label: 'What is the pricing for Condottierre table bookings?',
    answer: <p>The pricing for Condottierre table bookings is <strong>$5 per hour</strong>, with all supplies and paint provided. Please check for table availability and book ahead in advance to avoid disappointment!
    </p>
 
  },
  {
    key: '4',
    label: 'How do I change my orders and its details?',
    answer: <p>To change your orders after confirmation, just call us at our hotline @ <strong>9111 1111</strong>.</p>,
  },
  {
    key: '5',
    label: 'What are the delivery charges?',
    answer: <p>The delivery charges vary based on the location and services.
      <br /><br /> 
      For <strong>painting services</strong>, we can meet at your local gaming store for free, or your specified location for $20. 
      <br /><br /> 
      For <strong>masterclasses</strong>, the lessons will take place at our venue, at 111 Rivendell Place #01-111, Singapore 511111. 
      <br /><br /> 
      For <strong>paint table bookings</strong>, these are also at our venue above, at 111 Rivendell Place. 
    </p>,
  },
  ];
  
//? tried to edit the table item hover color => deprioritize first
// const StyledTable = styled((props) => <Table {...props} />)`
//   && tbody > tr:hover > td {
//     background: rgba(224, 248, 232, 1);
//   }
// `
  
  
  
  
  
  
  
  
  
  
  
const onChange = (key) => {
  console.log(key);
  };
  
  return (
    <>
    <Divider orientation="left" style={{margin: "0px" }}> <h2 style={{ fontFamily: 'Palatino Linotype'}}>Frequently Asked Questions</h2> </Divider>

    {/* <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} style={{ maxWidth: '60%', margin: '0 0 3% 5%'}} /> */}
      <Collapse defaultActiveKey={['1']} onChange={onChange} style={{ maxWidth: '60%', margin: '0 0 3% 5%'}} >
    
      {items.map(item => (
        <Collapse.Panel
          header={item.label}
          key={item.key}
        >
          {item.answer}
        </Collapse.Panel>
      ))}
        
      </Collapse> 

    </>);
}