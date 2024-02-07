import { useOutletContext } from "react-router-dom";
import Graph from "../../../components/Graphs/Graph";
import "./DashboardPage.css";
import DashboardNumbers from "../../../components/DashboardNumbers/DashboardNumbers";
import DashboardTable from "../../../components/DashboardTable/DashboardTable";
import { goalsToData } from "../../../utilities/helper";

export default function DashboardPage() {
  const { logs, goals } = useOutletContext();

  // console.log(goals)
  
  const reversedLogs = structuredClone(logs);
  reversedLogs.reverse();
  const {goalData, goalTarget} = goalsToData(reversedLogs, goals);

  const labels = [];
  const totals = [];
  const totalSavings = [];
  const totalInvestments = [];
  for (const log of reversedLogs) {
    labels.push(log.date);
    totals.push(log.total);
    totalSavings.push(log.totalSavings);
    totalInvestments.push(log.totalInvestments);
  }

  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-left-container">
          <div className="dashboard-top-left-container">
            <div className="dashboard-graph">
              <h2>Total Assets</h2>
              <Graph labels={labels} values={totals} color={"#000000"} goals={goalData} goalTarget={goalTarget} />
            </div>
            <DashboardNumbers logs={logs} />
          </div>
          <DashboardTable logs={logs} />
        </div>
        <div className="dashboard-small-graphs">
          <h3>Total Investments</h3>
          <Graph labels={labels} values={totalInvestments} color={"#39B54A"} />
          <h3>Total Savings</h3>
          <Graph labels={labels} values={totalSavings} color={"#76b6dd"} />
        </div>
      </div>
    </>
  );
}
