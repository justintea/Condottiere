import { Outlet, useOutletContext } from "react-router-dom";
import NavbarIn from "../../components/0Navbar/NavbarIn/NavbarIn";
import { useEffect, useState } from "react";

//* objective: write a new userpage, write links to a cart confirmation page, write a cart confirmation page

export default function UserPage1({ user, setUser }) {
  
  //? declare states
  const [order, setOrder] = useState([]);
  
  //? use effect to load all data... but this is the overhang, not the page itself
  



  return (<>
    <NavbarIn user={user} setUser={setUser} />
    <Outlet />
  
    {/* i think what happens here: this loads, takes in all the data,
    'allows a parent route to render its child route elements',
    therefore replaced by its child page components
    means, other pages render, with the data you need all available to them */}

    {/* DashboardPage's implementation // Portal Out:
    const {logs, goals} = useOutletContext(); */}


    {/* <Outlet context={{ logs, setLogs, goals, setGoals }} /> */}

  
  
  </>);
}