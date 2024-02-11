

export default function CartconfirmationPage({ user }) {
  
  const localStorageData = localStorage.getItem('data1Key');
  const parsedData = JSON.parse(localStorageData);

  return (<>
    <h2>Shopping Cart </h2>
    <p> to be rendered nicely</p>
    <div>
 parsedData = {JSON.stringify(parsedData, null, 2)}
      </div>
    
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