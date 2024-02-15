import "../../App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavbarOut from "../../components/0Navbar/NavbarOut/NavbarOut";
import LandingPageOut from "../0LandingPage/LandingPageOut";
import PaintforhirePage from "../1ServicesPage/1PaintforhirePage";
import MasterclassPage from "../1ServicesPage/2MasterclassPage";
import TablebookingPage from "../1ServicesPage/3TablebookingPage";
import AuthPage from "../2AuthPage/AuthPage";
import SignupPage from "../2SignupPage/SignupPage";
import UserPage from "../3UserPage/0UserPage";
import UserInfoPage from "../3UserPage/2UserInfoPage/1UserInfoPage";
import LandingPageIn from "../0LandingPage/LandingPageIn";
import CartconfirmationPage from "../3UserPage/1CartconfirmationPage/CartconfirmationPage";
import UserOrderPage from "../3UserPage/2UserInfoPage/2UserOrderPage";
import FAQPage from "../1ServicesPage/4FAQPage";
import UserAddressPage from "../3UserPage/2UserInfoPage/3UserAddressPage";
import UserAddAddressPage from "../3UserPage/2UserInfoPage/4UserAddAddressPage";
import UserEditAddressPage from "../3UserPage/2UserInfoPage/4UserEditAddressPage";

import AdminDashboardPage from "../3UserPage/3AdminPage/0AdminDashboardPage";
import AdminUserOrdersPage from "../3UserPage/3AdminPage/1AdminUserOrdersPage/AdminUserOrdersPage";
import AdminUserCredentialsPage from "../3UserPage/3AdminPage/2AdminUserCredentialsPage/AdminUserCredentialsPage";
import AdminUserAddressesPage from "../3UserPage/3AdminPage/3AdminUserAddressesPage/AdminUserAddressesPage";


function App() {
  const [user, setUser] = useState(null);
  
  return (
    <>
      {user ? (
        <>
        <Routes>
          {user.admin ? (
            // Admin user
            <Route path="user" element={<UserPage user={user} setUser={setUser} />}>
                <Route path="admin" element={<AdminDashboardPage user={user} />} />
                <Route path="admin_userorders" element={<AdminUserOrdersPage user={user} />} />
                <Route path="admin_usercredentials" element={<AdminUserCredentialsPage user={user} />} />
                <Route path="admin_useraddresses" element={<AdminUserAddressesPage user={user} />} />
                <Route path="admin_faqs" element={<FAQPage user={user} />} />
            </Route>

          ) : (
            // Regular user
            <Route path="user" element={<UserPage user={user} setUser={setUser} />}>
              <Route path="" element={<LandingPageIn user={user} />} />
              <Route path="info" element={<UserInfoPage user={user} />} />
              <Route path="paintservices" element={<PaintforhirePage user={user} />} />
              <Route path="paintclasses" element={<MasterclassPage user={user} />} />
              <Route path="painttables" element={<TablebookingPage user={user} />} />
              <Route path="cart" element={<CartconfirmationPage user={user} />} />
              <Route path="orders" element={<UserOrderPage user={user} />} />
              <Route path="faqs" element={<FAQPage user={user} />} />
              <Route path="address" element={<UserAddressPage user={user} />} />
              <Route path="addaddress" element={<UserAddAddressPage user={user} />} />
              <Route path="editaddress" element={<UserEditAddressPage user={user} />} />
            </Route>
          )}
        </Routes>
      </>
      ) : (
        <>
          <NavbarOut />
          <Routes>
            <Route path="/" element={<LandingPageOut user={user} />} />
            <Route path="login"     element={<AuthPage user={user} setUser={setUser} />}      />
            <Route path="signup" element={<SignupPage setUser={setUser} />}     />
            <Route path="paintservices"   element={<PaintforhirePage user={user} />}      />
            <Route path="paintclasses"    element={<MasterclassPage user={user} />}       />
            <Route path="painttables"     element={<TablebookingPage user={user} />}      />
            <Route path="faqs" element={<FAQPage user={user} />} />  
              
            </Routes>
        </>
      )}
    </>
  );
}

export default App;


//? 16/2 1220: save point, before implementing conditions for Admin:true
// return (
//   <>
//     {user ? (
//       <>
//         <Routes>
//           <Route path="user" element={<UserPage user={user} setUser={setUser} />}     >
//               <Route path="" element={<LandingPageIn user={user} />} />
//               <Route path="info" element={<UserInfoPage user={user} />} />
//               <Route path="paintservices" element={<PaintforhirePage user={user} />} />
//               <Route path="paintclasses" element={<MasterclassPage user={user} />} />
//               <Route path="painttables" element={<TablebookingPage user={user} />} />
//               <Route path="cart" element={<CartconfirmationPage user={user} />} />
//               <Route path="orders" element={<UserOrderPage user={user} />} />
//               <Route path="faqs"     element={<FAQPage user={user} />}      />
//               <Route path="address" element={<UserAddressPage user={user} />} />  
//               <Route path="addaddress" element={<UserAddAddressPage user={user} />} />  
//               <Route path="editaddress" element={<UserEditAddressPage user={user} />} />  

//               <Route path="admin" element={<AdminDashboardPage user={user} />} />  

//             {/* //? eg. i want /user/paintservices AND /paintservices to go to same site, just that one has Outletcontext and one does */}
//             {/* <Route index element={<DashboardPage />} /> */}
//             {/* <Route index element={<DashboardPage />} />
//             <Route path="dashboard" element={<DashboardPage />} />
//             <Route path="tracking" element={<TrackingPage />} />
//             <Route path="edit" element={<EditPage />} />
//             <Route path="goals" element={<GoalsPage />} />
//             <Route path="goals" element={<GoalsPage />} /> */}
//           </Route>
//           </Routes>
//       </>
//     ) : (
//       <>
//         <NavbarOut />
//         <Routes>
//           <Route path="/" element={<LandingPageOut user={user} />} />
//           <Route path="login"     element={<AuthPage user={user} setUser={setUser} />}      />
//           <Route path="signup" element={<SignupPage setUser={setUser} />}     />
//           <Route path="paintservices"   element={<PaintforhirePage user={user} />}      />
//           <Route path="paintclasses"    element={<MasterclassPage user={user} />}       />
//           <Route path="painttables"     element={<TablebookingPage user={user} />}      />
//           <Route path="faqs" element={<FAQPage user={user} />} />  
            
//           </Routes>
//       </>
//     )}
//   </>
// );

//? J: 11/2 17230: savepoint, i want to route to Cart confirmation page
// {/* <Routes>
//           {/* <Route path="/" element={Navigate('/user/info')} /> */}
//             <Route path="user" element={<UserPage user={user} setUser={setUser} />}     >



//               <Route path="" element={<LandingPageIn />} />
//               <Route path="info" element={<UserInfoPage />} />
//               <Route path="paintservices" element={<PaintforhirePage user={user} />} />
//               <Route path="paintclasses" element={<MasterclassPage user={user} />} />
//               <Route path="painttables" element={<TablebookingPage user={user} />} />
//               <Route path="cart" element={<CartconfirmationPage user={user} />} />
          
//               {/* //? eg. i want /user/paintservices AND /paintservices to go to same site, just that one has Outletcontext and one does */}
//               {/* <Route index element={<DashboardPage />} /> */}
//               {/* <Route index element={<DashboardPage />} />
//               <Route path="dashboard" element={<DashboardPage />} />
//               <Route path="tracking" element={<TrackingPage />} />
//               <Route path="edit" element={<EditPage />} />
//               <Route path="goals" element={<GoalsPage />} />
//               <Route path="goals" element={<GoalsPage />} /> */}
//             </Route>
//             </Routes> */}

//? J: 24/1 0050: initial Return code
{
  /* <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="user" element={<UserPage />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="tracking" element={<TrackingPage />} />
          <Route path="edit" element={<EditPage />} />
          <Route path="goals" element={<GoalsPage />} />
        </Route>
      </Routes>  */
}


//? 0140 09/02
// {/* <Routes>
// {/* <Route path="user"    element={<UserPage user={user} setUser={setUser} />}      >
//         <Route path="/" element={<Navigate to="/user/info" />} />
//   <Route path="info" element={<UserInfoPage />} /> */}

// <Route path="/" element={<Navigate to="/user/info" />} />
// <Route path="user" element={<UserPage user={user} setUser={setUser} />}
// >
//   <Route path="info" element={<UserInfoPage />} />
//   {/* <Route path="paintservices"   element={<PaintforhirePage user={user} />}      />
//         <Route path="paintclasses"    element={<MasterclassPage user={user} />}     />
//         <Route path="painttables"     element={<TablebookingPage user={user} />}      /> */}
//   {/* //? eg. i want /user/paintservices AND /paintservices to go to same site, just that one has Outletcontext and one does */}

//   {/* <Route index element={<DashboardPage />} />
//   <Route path="dashboard" element={<DashboardPage />} />
//   <Route path="tracking" element={<TrackingPage />} />
//   <Route path="edit" element={<EditPage />} />
//   <Route path="goals" element={<GoalsPage />} /> */}
// </Route>
// </Routes> */}