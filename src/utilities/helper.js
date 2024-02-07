import { differenceInDays } from "date-fns";

export function numToCurrency(num) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
}

export function currencyToNum(currStr) {
  const isNumberString = /^[0-9]+$/;
  let result = currStr.replace(/[$,]/g, "");

  if (isNumberString.test(result)) {
    return parseInt(result);
  } else {
    window.alert("Not a number!");
    throw new Error("Not a number!");
  }
}

export function goalsToData(logs, goals) {
  const goalData = {};
  const goalTarget = {};
  for (const goal of goals) {
    // console.log(goal)
    const goalLogs = [];
    const goalTargetLogs = [];
    for (const log of logs) {
      if (new Date(log.date) >= new Date(goal.createdAt)) {
        const goalLog = {};
        goalLog.date = log.date;
        goalLog.amount =
          (differenceInDays(log.date, goal.createdAt) * goal.currentAmount) /
          differenceInDays(goal.dateUpdated, goal.createdAt);
        // console.log(goalLog)
        goalLogs.push(goalLog);

        const goalTargetLog = {};
        goalTargetLog.date = log.date;
        goalTargetLog.amount =
          (differenceInDays(log.date, goal.createdAt) * goal.targetAmount) /
          differenceInDays(goal.endDate, goal.createdAt);
        goalTargetLogs.push(goalTargetLog);
      }
    }
    goalData[goal.name] = goalLogs;
    goalTarget[goal.name] = goalTargetLogs;
  }

  // console.log(goalData, goalTarget);
  return { goalData, goalTarget };
}
