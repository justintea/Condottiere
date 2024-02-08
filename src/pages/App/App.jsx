import "../../App.css";
import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavbarOut from "../../components/0Navbar/NavbarOut/NavbarOut";
import LandingPage from "../0LandingPage/LandingPage";
import PaintforhirePage from "../1ServicesPage/1PaintforhirePage";
import MasterclassPage from "../1ServicesPage/2MasterclassPage";
import TablebookingPage from "../1ServicesPage/3TablebookingPage";

import AuthPage from "../2AuthPage/AuthPage";
import SignupPage from "../2SignupPage/SignupPage";
import UserPage from "../UserPage/UserPage";

import UserPreferencePage from "../UserPage/UserPreferencePage/UserPreferencePage";
import { getUser } from "../../utilities/usersService";

import DashboardPage from "../UserPage/DashboardPage/DashboardPage";
import TrackingPage from "../UserPage/TrackingPage/TrackingPage";
import EditPage from "../UserPage/EditPage/EditPage";
import GoalsPage from "../UserPage/GoalsPage/GoalsPage";


function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      {user ? (
        <>
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/user/dashboard" />}
            />
            <Route
              path="user"
              element={<UserPage user={user} setUser={setUser} />}
            >
              <Route index element={<DashboardPage />} />
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="tracking" element={<TrackingPage />} />
              <Route path="edit" element={<EditPage />} />
              <Route path="goals" element={<GoalsPage />} />
              <Route path="preferences" element={<UserPreferencePage />} />
            </Route>
          </Routes>
        </>
      ) : (
          <>
                  <NavbarOut />
          <Routes>
            <Route path="/" element={<LandingPage />} />
              <Route path="login" element={<AuthPage user={user} setUser={setUser} />} />
              <Route path="signup" element={<SignupPage setUser={setUser} />} />
              <Route path="/paintservices" element={<PaintforhirePage user={user} />} />
              <Route path="/paintclasses" element={<MasterclassPage user={user} />} />
              <Route path="/painttables" element={<TablebookingPage user={user} />} />

          </Routes>
        </>
      )}
    </>
  );
}

export default App;

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
