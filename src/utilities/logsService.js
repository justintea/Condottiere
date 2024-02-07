import { currencyToNum, numToCurrency } from "./helper";
import { format } from "date-fns";
import * as logsAPI from "./logsAPI";
import { getUser } from "./usersService";

export async function getLogs() {
  const data = await logsAPI.getLogs();
  // console.log(data);
  const logs = formatDateFromFetch([...data]);

  return logs;
}

export async function updateLogs(logs) {
  const body = [];
  for (const log of logs) {
    body.push({
      id: log.id,
      userId: log.userId,
      date: log.date,
      savings: [...log.savings],
      investments: [...log.investments],
      liabilities: [...log.liabilities],
    });
  }
  const response = await logsAPI.updateLogs(body);
  // console.log(response)
  return formatDateFromFetch(response);
}

export async function createLog(log) {
  const response = await logsAPI.createLog(log);

  return formatDateFromFetch([response]);
}

export async function deleteLog(log) {
  const id = log.id
  const response = await logsAPI.deleteLog(id)
  console.log(response);
  return response;
}

export function getAccountNames(logs) {
  const savingsAccNames = [];
  const investmentAccNames = [];
  const liabilityAccNames = [];

  for (let log of logs) {
    for (let { name } of log.savings) {
      if (!savingsAccNames.includes(name)) {
        savingsAccNames.push(name);
      }
    }
    for (let { name } of log.investments) {
      if (!investmentAccNames.includes(name)) {
        investmentAccNames.push(name);
      }
    }
    for (let { name } of log.liabilities) {
      if (!liabilityAccNames.includes(name)) {
        liabilityAccNames.push(name);
      }
    }
  }
  return { savingsAccNames, investmentAccNames, liabilityAccNames };
}

export function createNewLogState(logs) {
  const userId = getUser()._id

  if (!logs || typeof logs[0] === "undefined") {
    console.log("no logs")
    return { userId, date: new Date(), savings: [], investments: [], liabilities: [] };
  }

  const temp = structuredClone(logs)

  const newLog = {
    savings: temp[0]?.savings,
    investments: temp[0]?.investments,
    liabilities: temp[0]?.liabilities,
    userId,
  };

  newLog.date = new Date(Date.now());

  for (const account of newLog.savings) {
    account.amount = 0;
    delete account?._id;
  }
  for (const account of newLog.investments) {
    account.amount = 0;
    delete account?._id;
  }
  for (const account of newLog.liabilities) {
    account.amount = 0;
    delete account?._id;
  }

  return newLog;
}

export function getColumnHeaders(logs, extra = false) {
  const { savingsAccNames, investmentAccNames, liabilityAccNames } =
    getAccountNames(logs);
  let width;

  if (extra) {
    width =
      90 /
        (4 +
          savingsAccNames.length +
          investmentAccNames.length +
          liabilityAccNames.length) +
      "%";
  } else {
    width =
      80 /
        (savingsAccNames.length +
          investmentAccNames.length +
          liabilityAccNames.length) +
      "%";
  }

  const allAccNames = [
    { title: "Date", dataIndex: "date", width: "10%", className: "date" },
    ...savingsAccNames.map((name) => {
      return {
        title: name,
        dataIndex: "s-" + name,
        editable: true,
        width,
        className: "savings",
      };
    }),
    ...investmentAccNames.map((name) => {
      return {
        title: name,
        dataIndex: "i-" + name,
        editable: true,
        width,
        className: "investments",
      };
    }),
    ...liabilityAccNames.map((name) => {
      return {
        title: name,
        dataIndex: "l-" + name,
        editable: true,
        width,
        className: "liabilities",
      };
    }),
  ];

  if (extra) {
    const dashBoardColumns = [
      {
        title: "Total Assets",
        dataIndex: "total",
        width,
        className: "totals",
      },
      {
        title: "Growth",
        dataIndex: "growth",
        width,
        className: "totals",
      },
      {
        title: "Savings",
        dataIndex: "totalSavings",
        width,
        className: "totals",
      },
      {
        title: "Investments",
        dataIndex: "totalInvestments",
        width,
        className: "totals",
      },
    ];

    return allAccNames.concat(dashBoardColumns);
  } 
  // console.log(allAccNames);
  return allAccNames;
}

export function flattenLogs(logs) {
  const flattened = [];
  logs.forEach((log, i) => {
    const data = {};
    data.key = log.date;
    data.date = log.date;
    data.id = log.id;
    for (let account of log.savings) {
      data["s-" + account.name] = numToCurrency(account.amount);
    }
    for (let account of log.investments) {
      data["i-" + account.name] = numToCurrency(account.amount);
    }
    for (let account of log.liabilities) {
      data["l-" + account.name] = numToCurrency(account.amount);
    }
    data.total = numToCurrency(log.total);
    data.totalInvestments = numToCurrency(log.totalInvestments);
    data.totalSavings = numToCurrency(log.totalSavings);
    data.growth =
      i === logs.length - 1
        ? "na"
        : numToCurrency(log.total - logs[i + 1].total);
    flattened.push(data);
  });
  // console.log(flattened)
  return flattened;
}

export function packageLogs(logs, data, ids) {
  const packaged = [];
  for (const row of data) {
    if (ids.includes(row.id)) {
      const [log] = structuredClone(logs.filter((i) => i.id === row.id));
      log.totalSavings = 0;
      log.totalInvestments = 0;
      log.totalLiabilities = 0;
      for (let acc of log.savings) {
        acc.amount = currencyToNum(row["s-" + acc.name]);
        log.totalSavings += acc.amount;
      }
      for (let acc of log.investments) {
        acc.amount = currencyToNum(row["i-" + acc.name]);
        log.totalInvestments += acc.amount;
      }
      for (let acc of log.liabilities) {
        acc.amount = currencyToNum(row["l-" + acc.name]);
        log.totalLiabilities += acc.amount;
      }
      log.total =
        log.totalSavings + log.totalInvestments - log.totalLiabilities;
      packaged.push(log);
    }
  }
  // console.log(packaged)
  return packaged;
}

export function formatDateFromFetch(logs) {
  for (const log of logs) {
    log.date = format(log.date, "d MMM yyyy");
  }
  return logs;
}

export function sortLogs(logs) {
  logs.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (dateA < dateB) {
      return 1;
    } else {
      return -1;
    }
  });
  return logs;
}

export function logArrToObj(logs) {
  const copy = structuredClone(logs);

  copy.forEach((log, i) => {
    copy[i].key = log.date;

    const savingAccountsArr = [...log.savings];
    const savingAccountsObj = {};
    for (const account of savingAccountsArr) {
      savingAccountsObj[account.name] = account;
    }
    copy[i].savings = savingAccountsObj;

    const investmentAccountsArr = [...log.investments];
    const investmentAccountsObj = {};
    for (const account of investmentAccountsArr) {
      investmentAccountsObj[account.name] = account;
    }
    copy[i].investments = investmentAccountsObj;

    const liabilitiesAccountsArr = [...log.liabilities];
    const liabilitiesAccountsObj = {};
    for (const account of liabilitiesAccountsArr) {
      liabilitiesAccountsObj[account.name] = account;
    }
    copy[i].liabilities = liabilitiesAccountsObj;
  });
  // console.log(copy)
  return copy;
}
