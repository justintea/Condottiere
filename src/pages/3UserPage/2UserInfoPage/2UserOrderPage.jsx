// import UserpreferenceForm from "../../../components/UserPreferenceForm/UserpreferenceForm";
import { Outlet, useOutletContext } from "react-router-dom";
  
export default function UserOrderPage() {
  const { orders, setOrders } = useOutletContext();

  //? probably a list 
  console.log(orders);
  //? many arrays
  //? for arrays, go into object 
  return (
    <>
      <h2 style={{ fontFamily: "Palatino Linotype" }}> User Orders </h2>
      <p> probably a list 'Orders', mapped into items and rendered here</p>
      {/* <div> {orders} </div> */}
    </>);
}