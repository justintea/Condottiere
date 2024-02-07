import { Table } from "antd";
import { flattenLogs, getColumnHeaders } from "../../utilities/logsService";
import { useEffect, useState } from "react";

export default function DashboardTable({ logs }) {

  let slicedLogs = [];

  if (logs.length <= 3) {
    slicedLogs = structuredClone(logs)
  }
  else {
    slicedLogs = logs.slice(0,3)
  }

  const [data, setData] = useState()

  useEffect(() => {
    setData(flattenLogs(logs))
  },[logs])

  const columns = getColumnHeaders(slicedLogs, true)
  return (
    <Table
      columns={columns}
      dataSource={data}
      // size={"small"}
      tableLayout="fixed"
      // pagination={false}
    />
  )
}