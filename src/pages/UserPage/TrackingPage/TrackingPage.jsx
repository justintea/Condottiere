import "./TrackingPage.css";
import { useEffect, useState } from "react";
import { DatePicker, Button } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import { useNavigate, useOutletContext } from "react-router-dom";
import {
  createLog,
  createNewLogState,
  sortLogs,
} from "../../../utilities/logsService";
import TrackingCard from "../../../components/TrackingCard/TrackingCard";
import dayjs from "dayjs";
import AddTrackingCard from "../../../components/AddTrackingCard/AddTrackingCard";

export default function TrackingPage() {
  const {logs, setLogs} = useOutletContext();
  const [newLog, setNewLog] = useState({savings: [], investments: [], liabilities: [], userId: "", date: new Date()});
  const navigate = useNavigate();

  useEffect(() => {
    setNewLog(createNewLogState(logs))
  },[logs])

  const updateNewLogAmount = (value, account, type) => {
    const temp = structuredClone(newLog);
    for (const acc of temp[type]) {
      if (acc.name === account.name) {
        acc.amount = value;
        break;
      }
    }
    setNewLog(temp);
    console.log(newLog)
  };

  const addAccount = (account, type) => {
    console.log("Add Account", account, type);
    const temp = structuredClone(newLog);
    temp[type].push(account);
    setNewLog(temp);
  };

  const deleteAccount = (account, type) => {
    const temp = structuredClone(newLog[type]).filter(l => l.name !== account.name)

    const removed = structuredClone(newLog)
    removed[type] = temp;

    setNewLog(removed);
  };

  const updateDepositAmount = (value, account) => {
    const temp = structuredClone(newLog);
    for (const acc of temp.investments) {
      if (acc.name === account.name) {
        if (acc.deposit < 0) {
          acc.deposit = -value;
        } else {
          acc.deposit = value;
        }
        break;
      }
    }
    setNewLog(temp);
    // console.log(newLog)
  };

  const updateDW = (value, account) => {
    const temp = structuredClone(newLog);
    for (const acc of temp.investments) {
      if (acc.name === account.name) {
        acc.deposit = Math.abs(acc.deposit);
        if (value === "minus") {
          acc.deposit = -acc.deposit;
        }
        break;
      }
    }
    setNewLog(temp);
    // console.log(newLog)
  };

  const disabledDate = (current) => {
    // Can not select days after today
    return current > dayjs().endOf('day');
  };

  const onDateChange = (date, dateString) => {
    setNewLog({ ...newLog, date: new Date(date) });
    // console.log(newLog)
  };

  const handleClick = async () => {
    // console.log("clicked!");
    const response = await createLog(newLog);
    console.log(response);
    const temp = structuredClone(logs).concat(response);
    const sorted = sortLogs(temp);
    setLogs(sorted);
    //TODO: update goals
    navigate("/user/dashboard")
  };

  return (
    <>
      <div className="tracking-page-header">
      <h1>Tracking</h1>
      <DatePicker disabledDate={disabledDate} defaultValue={dayjs()} onChange={onDateChange} size="large"/>
      <Button
        type="primary"
        onClick={handleClick}
          style={{ marginLeft: "1rem" }}
          size="large"
      >
        <SaveOutlined /> Save
        </Button>
        </div>
      <div className="tracking-page-div">
        <div className="tracking-type-container">
          <h2 className="account-type">Saving Accounts</h2>
          <div className="tracking-container tracking-savings">
            {newLog?.savings.map((account) => (
              <TrackingCard
                key={account.name}
                type={"savings"}
                account={account}
                updateNewLogAmount={updateNewLogAmount}
                deleteAccount={deleteAccount}
              />
            ))}
            <AddTrackingCard type={"savings"} addAccount={addAccount} />
          </div>
        </div>
        <div className="tracking-type-container">
          <h2 className="account-type">Investment Accounts</h2>
          <div className="tracking-container tracking-investments">
            {newLog?.investments.map((account) => (
              <TrackingCard
                key={account.name}
                type={"investments"}
                account={account}
                updateNewLogAmount={updateNewLogAmount}
                deleteAccount={deleteAccount}
                updateDepositAmount={updateDepositAmount}
                updateDW={updateDW}
              />
            ))}
            <AddTrackingCard type={"investments"} addAccount={addAccount} />
          </div>
        </div>
        <div className="tracking-type-container">
          <h2 className="account-type">Liabilities</h2>
          <div className="tracking-container tracking-liabilities">
            {newLog?.liabilities.map((account) => (
              <TrackingCard
                key={account.name}
                type={"liabilities"}
                account={account}
                updateNewLogAmount={updateNewLogAmount}
                deleteAccount={deleteAccount}
              />
            ))}
            <AddTrackingCard type={"liabilities"} addAccount={addAccount} />
          </div>
        </div>
      </div>
    </>
  );
}
