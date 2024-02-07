import { useContext, createContext, useEffect, useRef, useState } from "react";
import { Button, Form, Input, Table, Popconfirm } from "antd";
import "./EditTable.css";
import {
  deleteLog,
  flattenLogs,
  getColumnHeaders,
  packageLogs,
  sortLogs,
  updateLogs,
} from "../../utilities/logsService";
import { SaveOutlined, DeleteOutlined } from "@ant-design/icons";

const EditableContext = createContext(null);
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);
  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };
  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };
  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};

export default function EditTable({ logs, setLogs }) {
  const [data, setData] = useState();

  useEffect(() => {
    setData(flattenLogs(logs));
  }, [logs]);

  const [updatedIds, setUpdatedIds] = useState([]);

  const deleteColumn = {
    title: "Action",
    key: "action",
    width: "8%",
    render: (_, record) =>
      data.length >= 1 ? (
        <Popconfirm
          title="Sure to delete?"
          onConfirm={() => handleDelete(record.key)}
        >
          <a><DeleteOutlined /> Delete</a>
        </Popconfirm>
      ) : null,
  };

  const columnHeaders = getColumnHeaders(logs);

  columnHeaders.push(deleteColumn);

  const columns = columnHeaders.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  const handleBeforeUnload = (e) => {
    if (updatedIds.length) {
      const message =
        "You have unsaved changes. Are you sure you want to leave?";
      e.returnValue = message;
      return message;
    }
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [updatedIds]);

  const handleClick = async () => {
    try {const updatedLogs = packageLogs(logs, data, updatedIds);
    const response = await updateLogs(updatedLogs);
    const responseIds = [];
    for (const r of response) {
      responseIds.push(r.id);
    }
    const newLogs = logs
      .filter((log) => !responseIds.includes(log.id))
      .concat(response);

    const sorted = sortLogs(newLogs);
    setLogs(sorted);
      setUpdatedIds([]);
    } catch {
      window.alert("Error")
    }
  };

  const handleSave = (row) => {
    const newData = [...data];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];

    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setUpdatedIds([...updatedIds, data[index].id]);
    setData(newData);
  };

  const handleDelete = async (key) => {
    const toDelete = data.find((item) => item.key === key);
    const response = await deleteLog(toDelete);
    const newLogs = logs.filter((item) => item.id !== response?.id);
    setLogs(newLogs);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  return (
    <div className="edit-table">
      <div className="edit-table-header" >
      <h1>Edit</h1>
      <Button
        type="primary"
        className="save-button"
        onClick={handleClick}
        disabled={!updatedIds.length}
      >
        <SaveOutlined /> Save
        </Button>
        </div>
      <Table
        components={components}
        rowClassName={() => "editable-row"}
        bordered
        dataSource={data}
        columns={columns}
      />
      {/* {blocker.state === "blocked" ? (<div>
          <p>Are you sure you want to leave?</p>
          <button onClick={() => blocker.proceed()}>
            Proceed
          </button>
          <button onClick={() => blocker.reset()}>
            Cancel
          </button>
        </div>
      ) : null} */}
    </div>
  );
}
