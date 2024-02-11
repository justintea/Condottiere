import { Collapse } from 'antd';
import { Divider } from "antd";

export default function FAQPage() {

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items = [
  {
    key: '1',
    label: 'What is the pricing for Condottierre services?',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'How do I change my orders and its details?',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'What are the delivery charges?',
    children: <p>{text}</p>,
  },
];

const onChange = (key) => {
  console.log(key);
  };
  
  return (
    <>
    <Divider orientation="left" style={{margin: "0px" }}> <h2 style={{ fontFamily: 'Palatino Linotype'}}>Frequently Asked Questions</h2> </Divider>

      <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} idth={10 } />
    
    
    
    
    
    </>);
}