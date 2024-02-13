import { Outlet, useOutletContext } from "react-router-dom";
  
export default function UserAddressPage() {
  const { orders, setOrders } = useOutletContext();

    //? probably a list 

  return (
    <>
      <h2 style={{ fontFamily: "Palatino Linotype" }}> User Orders </h2>
      <p> probably a list 'Orders', mapped into items and rendered here</p>
      <div> {orders} </div>
    </>);
}