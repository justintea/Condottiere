import "../../App.css";
import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import UserPage from "../UserPage/UserPage";
import DashboardPage from "../UserPage/DashboardPage/DashboardPage";
import TrackingPage from "../UserPage/TrackingPage/TrackingPage";
import EditPage from "../UserPage/EditPage/EditPage";
import GoalsPage from "../UserPage/GoalsPage/GoalsPage";
import AuthPage from "../AuthPage/AuthPage";
import SignupPage from "../SignupPage/SignupPage";
import UserPreferencePage from "../UserPage/UserPreferencePage/UserPreferencePage";
import { getUser } from "../../utilities/usersService";

function App() {
  const [user, setUser] = useState(getUser());

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
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="login" element={<AuthPage setUser={setUser} />} />
            <Route path="signup" element={<SignupPage setUser={setUser} />} />
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
