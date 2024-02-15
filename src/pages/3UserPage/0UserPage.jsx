import { Outlet, useOutletContext } from "react-router-dom";
import NavbarIn from "../../components/0Navbar/NavbarIn/NavbarIn";
import { useEffect, useState } from "react";
import { getOrders } from "../../utilities/1ordersService";
import { getOneAddress } from "../../utilities/2addressesService";


//* objective: write a new userpage, write links to a cart confirmation page, write a cart confirmation page

export default function UserPage1({ user, setUser }) {
  
  //? declare states
  const [orders, setOrders] = useState([]);
  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState([]);

  //? use effect to load all data... but this is the overhang, not the page itself
  useEffect(() => {
    (async function () {
      const data = await getOrders();
      setOrders(data);
      console.log(data);

      const addData = await getOneAddress();
      setAddress(addData); 
      console.log(addData);
      // const g = await getGoals();
      // setGoals(g);
      // console.log(goals)
    })();
  }, []);

  console.log('outlet Orders: ', orders);

  return (<>
    <NavbarIn user={user} setUser={setUser} orders={orders} setOrders={setOrders} cart={cart} setCart={setCart} address={address} setAddress={setAddress} />
    {/* <Outlet context={{ orders, setOrders }} /> */}
    <Outlet context={{ orders, setOrders, cart, setCart, address, setAddress }}  />
    
  
    {/* i think what happens here: this loads, takes in all the data,
    'allows a parent route to render its child route elements',
    therefore replaced by its child page components
    means, other pages render, with the data you need all available to them */}

    {/* DashboardPage's implementation // Portal Out:
    const {logs, goals} = useOutletContext(); */}

    {/* <Outlet context={{ logs, setLogs, goals, setGoals }} /> */}

  </>);
}