import { Card, InputNumber, Checkbox, Select, Button } from "antd";
import { useState } from "react";
const { Option } = Select;

export default function TrackingCard({
  type,
  account,
  updateNewLogAmount,
  deleteAccount,
  updateDepositAmount,
  updateDW,
}) {
  const [checked, setChecked] = useState(account.isShared);

  const [depositWithdraw, setDepositWithdraw] = useState("add");

  const handleAmountChange = (value) => {
    // console.log(value);
    updateNewLogAmount(value, account, type);
  };

  const handleIsSharedChange = (e) => {
    // console.log("checked = ", e.target.checked);
    setChecked(e.target.checked);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteAccount(account, type);
  };

  const handleDepositAmountChange = (value) => {
    console.log(value);
    updateDepositAmount(value, account);
  };

  const handleDWChange = (value) => {
    updateDW(value, account);
  };

  const selectBefore = (
    <Select defaultValue="add" style={{ width: "7rem" }} onChange={handleDWChange}>
      <Option value="add">Deposit</Option>
      <Option value="minus">Withdrawal</Option>
    </Select>
  );

  return (
    <>
      <Card
        title={account.name}
        style={{ width: "20rem" }}
        extra={
          <Button type={"primary"} danger onClick={handleDelete}>
            Delete
          </Button>
        }
        bodyStyle={{ display: "inline-block" }}
      >
        <div className="label-input-container">
          Amount:{" "}
          <InputNumber
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            onChange={handleAmountChange}
            min={0}
            value={account.amount}
          />
        </div>
        {type === "savings" ? (
          <>
            <br />
            <div className="label-input-container">
              Shared Account:{" "}
              <Checkbox checked={checked} onChange={handleIsSharedChange} />
            </div>
          </>
        ) : type === "investments" ? (
          <>
            <br />
            <div className="label-input-container">
              <InputNumber
                addonBefore={type === "investments" ? selectBefore : null}
                defaultValue={account.deposit > 0 ? account.deposit : 0}
                formatter={(value) =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                onChange={handleDepositAmountChange}
                min={0}
                style={{
                  width: "14rem",
                }}
              />
            </div>
          </>
        ) : null}
      </Card>
    </>
  );
}
