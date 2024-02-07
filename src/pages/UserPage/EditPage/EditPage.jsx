import { useOutletContext } from "react-router-dom";
import EditTable from "../../../components/EditTable/EditTable";

export default function EditPage() {
  const {logs, setLogs} = useOutletContext();
  
  return (
    <>
      <EditTable logs={logs} setLogs={setLogs} />
    </>
  );
}
