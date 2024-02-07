import { Outlet } from "react-router-dom";
import NavbarIn from "../../components/Navbar/NavbarIn/NavbarIn";
import { useEffect, useState } from "react";
import { getLogs } from "../../utilities/logsService";
import { getGoals } from "../../utilities/goalsService";

export default function UserPage({ user, setUser }) {
  const [logs, setLogs] = useState([]);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    (async function () {
      const data = await getLogs();
      setLogs(data);
      console.log(data);

      const g = await getGoals();
      setGoals(g);
      console.log(goals)
    })();
  }, []);

  return (
    <>
      <NavbarIn user={user} setUser={setUser} logs={logs} setLogs={setLogs} goals={goals} setGoals={setGoals} />
      {/* <h1>User Page</h1> */}
      <Outlet context={{ logs, setLogs, goals, setGoals }} />
    </>
  );
}